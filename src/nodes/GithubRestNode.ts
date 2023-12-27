// **** IMPORTANT ****
// Make sure you do `import type` and do not pull in the entire Rivet core library here.
// Export a function that takes in a Rivet object, and you can access rivet library functionality
// from there.
import type {
  ChartNode,
  EditorDefinition,
  Inputs,
  InternalProcessContext,
  NodeBodySpec,
  NodeConnection,
  NodeId,
  NodeInputDefinition,
  NodeOutputDefinition,
  NodeUIData,
  Outputs,
  PluginNodeImpl,
  PortId,
  Project,
  Rivet,
} from "@ironclad/rivet-core";
import { Octokit } from "../octokit";

// This defines your new type of node.
export type GithubRestNode = ChartNode<"githubPlugin", GithubPluginNodeData>;

// This defines the data that your new node will store.
export type GithubPluginNodeData = {
  route: string;

  // It is a good idea to include useXInput fields for any inputs you have, so that
  // the user can toggle whether or not to use an import port for them.
  useRouteInput?: boolean;

  params: string;
  useParamsInput?: boolean;

  paginate: boolean;
};

// Make sure you export functions that take in the Rivet library, so that you do not
// import the entire Rivet core library in your plugin.
export function githubRestNode(rivet: typeof Rivet) {
  // This is your main node implementation. It is an object that implements the PluginNodeImpl interface.
  const GithubRestNodeImpl: PluginNodeImpl<GithubRestNode> = {
    // This should create a new instance of your node type from scratch.
    create(): GithubRestNode {
      const node: GithubRestNode = {
        // Use rivet.newId to generate new IDs for your nodes.
        id: rivet.newId<NodeId>(),

        // This is the default data that your node will store
        data: {
          paginate: false,
          route: `GET /user`,
          params: "{}",
        },

        // This is the default title of your node.
        title: "GitHub REST",

        // This must match the type of your node.
        type: "githubPlugin",

        // X and Y should be set to 0. Width should be set to a reasonable number so there is no overflow.
        visualData: {
          x: 0,
          y: 0,
          width: 200,
        },
      };
      return node;
    },

    // This function should return all input ports for your node, given its data, connections, all other nodes, and the project. The
    // connection, nodes, and project are for advanced use-cases and can usually be ignored.
    getInputDefinitions(
      data: GithubPluginNodeData,
      _connections: NodeConnection[],
      _nodes: Record<NodeId, ChartNode>,
      _project: Project,
    ): NodeInputDefinition[] {
      const inputs: NodeInputDefinition[] = [];

      if (data.useRouteInput) {
        inputs.push({
          id: "query" as PortId,
          dataType: "string",
          title: "REST Route",
        });
      }
      if (data.useParamsInput) {
        inputs.push({
          id: "param" as PortId,
          dataType: "string",
          title: "REST Params",
        });
      }

      return inputs;
    },

    // This function should return all output ports for your node, given its data, connections, all other nodes, and the project. The
    // connection, nodes, and project are for advanced use-cases and can usually be ignored.
    getOutputDefinitions(
      _data: GithubPluginNodeData,
      _connections: NodeConnection[],
      _nodes: Record<NodeId, ChartNode>,
      _project: Project,
    ): NodeOutputDefinition[] {
      return [
        {
          id: "response" as PortId,
          dataType: "object",
          title: "REST Response",
        },
      ];
    },

    // This returns UI information for your node, such as how it appears in the context menu.
    getUIData(): NodeUIData {
      return {
        contextMenuTitle: "GitHub REST",
        group: "GitHub",
        infoBoxBody: "Makes a REST API request to GitHub.",
        infoBoxTitle: "GitHub REST",
      };
    },

    // This function defines all editors that appear when you edit your node.
    getEditors(
      _data: GithubPluginNodeData,
    ): EditorDefinition<GithubRestNode>[] {
      return [
        {
          type: "string",
          dataKey: "route",
          useInputToggleDataKey: "useRouteInput",
          label: "REST Route",
        },
        {
          type: "string",
          dataKey: "params",
          useInputToggleDataKey: "useParamsInput",
          label: "REST Params",
        },
        {
          type: "toggle",
          label: "Enable Pagination",
          dataKey: "paginate",
        },
      ];
    },

    // This function returns the body of the node when it is rendered on the graph. You should show
    // what the current data of the node is in some way that is useful at a glance.
    getBody(
      data: GithubPluginNodeData,
    ): string | NodeBodySpec | NodeBodySpec[] | undefined {
      return rivet.dedent`
        Route: ${data.useRouteInput ? "(Using Input)" : data.route}
        Params: ${data.useParamsInput ? "(Using Input)" : data.params}
      `;
    },

    // This is the main processing function for your node. It can do whatever you like, but it must return
    // a valid Outputs object, which is a map of port IDs to DataValue objects. The return value of this function
    // must also correspond to the output definitions you defined in the getOutputDefinitions function.
    async process(
      data: GithubPluginNodeData,
      inputData: Inputs,
      _context: InternalProcessContext,
    ): Promise<Outputs> {
      const route = rivet.getInputOrData(data, inputData, "route", "string");

      const paramsString = rivet.getInputOrData(
        data,
        inputData,
        "params",
        "string",
      );
      const params = JSON.parse(paramsString);

      const paginate = rivet.getInputOrData(
        data,
        inputData,
        "paginate",
        "boolean",
      );

      const token = _context.getPluginConfig("personalAccessToken");

      if (!token) {
        throw new Error(
          "No token. Please set a Personal Access Token in the plugin settings.",
        );
      }

      const octokit = new Octokit({
        userAgent: "rivet-plugin-github",
        auth: token,
      });

      const requestFunction = paginate ? octokit.paginate : octokit.request;

      const requestParams = { per_page: 100, ...params };

      const result = await requestFunction(route, requestParams);
      return {
        ["response" as PortId]: {
          type: "object",
          value: result,
        },
      };
    },
  };

  // Once a node is defined, you must pass it to rivet.pluginNodeDefinition, which will return a valid
  // PluginNodeDefinition object.
  const githubPluginNode = rivet.pluginNodeDefinition(
    GithubRestNodeImpl,
    "GitHub REST",
  );

  // This definition should then be used in the `register` function of your plugin definition.
  return githubPluginNode;
}

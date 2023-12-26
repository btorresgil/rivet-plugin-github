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
export type GithubGraphQLNode = ChartNode<"githubPlugin", GithubPluginNodeData>;

// This defines the data that your new node will store.
export type GithubPluginNodeData = {
  query: string;

  // It is a good idea to include useXInput fields for any inputs you have, so that
  // the user can toggle whether or not to use an import port for them.
  useQueryInput?: boolean;

  paginate: boolean;
};

// Make sure you export functions that take in the Rivet library, so that you do not
// import the entire Rivet core library in your plugin.
export function githubGraphQLNode(rivet: typeof Rivet) {
  // This is your main node implementation. It is an object that implements the PluginNodeImpl interface.
  const GithubGraphQLNodeImpl: PluginNodeImpl<GithubGraphQLNode> = {
    // This should create a new instance of your node type from scratch.
    create(): GithubGraphQLNode {
      const node: GithubGraphQLNode = {
        // Use rivet.newId to generate new IDs for your nodes.
        id: rivet.newId<NodeId>(),

        // This is the default data that your node will store
        data: {
          paginate: true,
          query: `
          query paginate($cursor: String) {
            repository(owner: "some-user", name: "some-repo") {
                issues(first: 100, after: $cursor) {
                    nodes {
                        title
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
          }
          `,
        },

        // This is the default title of your node.
        title: "GitHub GraphQL",

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

      if (data.useQueryInput) {
        inputs.push({
          id: "query" as PortId,
          dataType: "string",
          title: "GraphQL Query",
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
          dataType: "string",
          title: "GraphQL Response",
        },
      ];
    },

    // This returns UI information for your node, such as how it appears in the context menu.
    getUIData(): NodeUIData {
      return {
        contextMenuTitle: "GitHub GraphQL",
        group: "GitHub",
        infoBoxBody: "Makes a GraphQL request to GitHub.",
        infoBoxTitle: "GitHub GraphQL",
      };
    },

    // This function defines all editors that appear when you edit your node.
    getEditors(
      _data: GithubPluginNodeData,
    ): EditorDefinition<GithubGraphQLNode>[] {
      return [
        {
          type: "string",
          dataKey: "query",
          useInputToggleDataKey: "useQueryInput",
          label: "GraphQL Query",
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
        GitHub GraphQL
        Data: ${data.useQueryInput ? "(Using Input)" : data.query}
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
      const query = rivet.getInputOrData(data, inputData, "query", "string");

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

      const graphqlFunction = paginate
        ? octokit.graphql.paginate
        : octokit.graphql;

      const result = await graphqlFunction(query);
      return {
        ["response" as PortId]: {
          type: "string",
          value: JSON.stringify(result, null, 2),
        },
      };
    },
  };

  // Once a node is defined, you must pass it to rivet.pluginNodeDefinition, which will return a valid
  // PluginNodeDefinition object.
  const githubPluginNode = rivet.pluginNodeDefinition(
    GithubGraphQLNodeImpl,
    "GitHub GraphQL",
  );

  // This definition should then be used in the `register` function of your plugin definition.
  return githubPluginNode;
}

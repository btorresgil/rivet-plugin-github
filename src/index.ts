// It is important that you only import types from @ironclad/rivet-core, and not
// any of the actual Rivet code. Rivet is passed into the initializer function as
// a parameter, and you can use it to access any Rivet functionality you need.
import type { RivetPlugin, RivetPluginInitializer } from "@ironclad/rivet-core";

import { githubGraphQLNode } from "./nodes/GithubGraphQLNode.js";
import { githubRestNode } from "./nodes/GithubRestNode.js";

// A Rivet plugin must default export a plugin initializer function. This takes in the Rivet library as its
// only parameter. This function must return a valid RivetPlugin object.
const plugin: RivetPluginInitializer = (rivet) => {
  // Initialize any nodes in here in the same way, by passing them the Rivet library.
  const graphQLNode = githubGraphQLNode(rivet);
  const RestNode = githubRestNode(rivet);

  // The plugin object is the definition for your plugin.
  const githubPlugin: RivetPlugin = {
    // The ID of your plugin should be unique across all plugins.
    id: "github-plugin",

    // The name of the plugin is what is displayed in the Rivet UI.
    name: "GitHub Plugin",

    // Define all configuration settings in the configSpec object.
    configSpec: {
      personalAccessToken: {
        type: "string",
        label: "Personal Access Token (PAT)",
        description:
          "A Github Personal Access Token (PAT) with the needed scope.",
        helperText:
          "A Github Personal Access Token (PAT) with the needed scope.",
      },
    },

    // Define any additional context menu groups your plugin adds here.
    contextMenuGroups: [
      {
        id: "github",
        label: "GitHub",
      },
    ],

    // Register any additional nodes your plugin adds here. This is passed a `register`
    // function, which you can use to register your nodes.
    register: (register) => {
      register(graphQLNode);
      register(RestNode);
    },
  };

  // Make sure to return your plugin definition.
  return githubPlugin;
};

// Make sure to default export your plugin.
export default plugin;

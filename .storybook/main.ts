import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const path = require("path");

const config: StorybookConfig = {
  staticDirs: ["../src/stories/assets"],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  webpackFinal: async (config, { configType }) => {
    if (config.resolve) {
      config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/assets": path.resolve(__dirname, "../src/stories/assets"),
        "@/components": path.resolve(__dirname, "../src/stories/components"),
        "@/context": path.resolve(__dirname, "../src/stories/context"),
        "@/hooks": path.resolve(__dirname, "../src/stories/hooks"),
        "@/styles": path.resolve(__dirname, "../src/stories/styles"),
        "@/theme": path.resolve(__dirname, "../src/stories/theme"),
        "@/types": path.resolve(__dirname, "../src/stories/types"),
      };
      config.resolve.extensions?.push(".ts", ".tsx");
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
  },
};

export default config;

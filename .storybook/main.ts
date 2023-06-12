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
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-mdx-gfm",
  ],
  webpackFinal: async (config, { configType }) => {
    if (config.resolve) {
      config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/assets": path.resolve(__dirname, "../src/stories/assets"),
        "@/components": path.resolve(__dirname, "../src/stories/components"),
        "@/types": path.resolve(__dirname, "../src/stories/types"),
      };
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
          extensions: [".ts", ".js"],
        }),
      ];
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
};

export default config;

const path = require("path");

module.exports = {
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
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/assets": path.resolve(__dirname, "../src/stories/assets"),
      "@/components": path.resolve(__dirname, "../src/stories/components"),
      "@/types": path.resolve(__dirname, "../src/stories/types"),
    };

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};

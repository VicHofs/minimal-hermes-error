module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            app: "./app",
            assets: "./assets",
            components: "./components",
            styles: "./styles",
            utils: "./utils",
            data: "./data",
            hooks: "./hooks",
          },
        },
      ],
    ],
  };
};

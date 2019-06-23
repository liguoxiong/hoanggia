module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "./src/assets/scss/_variables.scss";
            @import "./src/assets/scss/_mixins.scss";
          `
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};

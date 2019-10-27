module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  chainWebpack: config => { // to turn off eslint
    config.module.rules.delete('eslint');
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
  }
};

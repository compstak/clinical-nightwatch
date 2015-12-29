Package.describe({
  summary: "Ultra-easy acceptance testing with Selenium.",
  version: "2.1.0",
  name: "compstak:nightwatch",
  git: "https://github.com/compstak/clinical-nightwatch",
  debugOnly: true
});

Npm.depends({
  'nightwatch': '0.8.11'
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.addAssets('globals.json', ['server']);
  api.addAssets('launch_nightwatch_from_app_root.sh', ['server']);

  api.addAssets('nightwatch_from_app_root.json', ['server']);
  api.addAssets('nightwatch_from_velocity.json', ['server']);
  api.addAssets('nightwatch_from_velocity_console.json', ['server']);

  api.addAssets('selenium/chromedriver', ['server']);
  api.addAssets('selenium/selenium-server-standalone-2.44.0.jar', ['server']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addAssets('clinical:nightwatch-tests.js', ['server']);
});

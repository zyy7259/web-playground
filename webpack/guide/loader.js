const path = require('path');
const MemoryFS = require('memory-fs');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);
const fs = new MemoryFS();
compiler.outputFileSystem = fs;

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
    return;
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  // console.log(info);
  const content = fs.readFileSync(path.join(__dirname, './dist/app.bundle.js'));
  console.log(content.toString());
});

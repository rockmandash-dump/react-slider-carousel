const fs = require('fs-extra');
const path = require('path');

fs.emptyDirSync(path.resolve(__dirname, '../lib'));

fs.writeFile(
  `${path.resolve(__dirname, '../lib')}/package.json`,
  `{
  "name": "react-slider-carousel",
  "version": "0.1.6",
  "main": "index.js",
  "dependencies": {
    "resize-observer-polyfill": "^1.5.1"
  },
  "peerDependencies": {
    "react": "16.7.0-alpha.2",
    "react-dom": "16.7.0-alpha.2"
  }
}`,
  'utf8'
);

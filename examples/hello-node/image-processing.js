const sharp = require("sharp");

function processImage() {
  sharp("input.jpg").resize(500, 500).greyscale().toFile("output.jpg");
}

module.exports = processImage;

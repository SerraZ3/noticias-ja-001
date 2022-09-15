const Image = require("../models/Image");
const ImageController = {
  index: async (req, res) => {
    try {
      const images = await Image.findAll();
      console.log(images);
      res.status(200).json({ data: images });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const image = await Image.findByPk(id);
      console.log(image);
      if (!image) {
        throw Error("Imagem não encontrada");
      }
      res.status(200).json({ data: image });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  },
  store: async (req, res) => {
    try {
      if (!req.file) {
        throw Error("Arquivo não submetido");
      }
      const extensionFile = req.file.filename.split(".")[1];
      const image = await Image.create({
        path: req.file.filename,
        size: req.file.size,
        extension: extensionFile,
      });

      res.status(200).json({ data: image });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  },
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
module.exports = ImageController;

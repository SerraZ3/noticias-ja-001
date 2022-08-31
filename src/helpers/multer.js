// Importamos o multer
const multer = require("multer");
// Importamos o crypto
const crypto = require("crypto");
// Importamos variável com caminho que será salvo a imagem
const uploadConfig = require("../config/upload");
// Criamos uma instancia do diskStorage com as configurações de salvamento da imagem
const storage = multer.diskStorage({
  // Função que irá dizer onde a imagem será salva
  destination: (req, file, cb) => {
    cb(null, uploadConfig.path);
  },
  // Função que irá alterar o nome da imagem para um hash
  filename: (req, file, cb) => {
    // Pega a extensão do nome original do arquivo
    const extension = file.originalname.split(".")[1];
    // Gera um hash hexadecimal
    const newName = crypto.randomBytes(10).toString("hex");
    // Altera o nome do arquivo
    cb(null, `${newName}.${extension}`);
  },
});
// Inicializamos o multer com as configurações acima
const upload = multer({ storage });
module.exports = upload;

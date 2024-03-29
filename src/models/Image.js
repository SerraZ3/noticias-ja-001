const Sequelize = require("sequelize");
const database = require("../config/sequelize");

const Image = database.define(
  "Image",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncremente: true,
      primaryKey: true,
    },
    path: {
      type: Sequelize.DataTypes.STRING(50),
      allowNull: false,
    },
    size: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    extension: {
      type: Sequelize.DataTypes.STRING(10),
    },
  },
  {
    underscored: true,
  }
);

module.exports = Image;

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class song_raga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      song_raga.belongsTo(models.song, {
        foreignKey: "song_id",
        as: "song",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      song_raga.belongsTo(models.raga, {
        foreignKey: "raga_id",
        as: "raga",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  song_raga.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      song_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "song",
          key: "id",
        },
      },
      raga_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "raga",
        },
      },
    },
    {
      sequelize,
      modelName: "song_raga",
    }
  );
  return song_raga;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class song_artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      song_artist.belongsTo(models.song, {
        foreignKey: "song_id",
        as: "song",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      song_artist.belongsTo(models.artist, {
        foreignKey: "artist_id",
        as: "artist",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  song_artist.init(
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
    },
    {
      sequelize,
      modelName: "song_artist",
    }
  );
  return song_artist;
};

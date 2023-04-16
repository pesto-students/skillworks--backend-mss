const { sequelize } = require("../../models");
const { Model } = require("sequelize");

const getAllArtistData = async (tableName) => {
  try {
    return await sequelize.Model(artist).findAll();
  } catch (error) {
    throw error;
  }
};
module.exports = getAllArtistData;

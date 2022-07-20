'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Organization.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },

    name: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },

    image: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },

    address: {
      type: DataTypes.VARCHAR,
      allowNull: true
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    email: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },

    welcomeText: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    aboutUsText: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    deletedAt: {
      type: DataTypes.DATE
    },
  },
    {
      sequelize,
      modelName: 'Organization',
      paranoid: true,
      timestamps: true
    });
  return Organization;
};
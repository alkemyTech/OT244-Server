'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slide.belongsTo(models.Organization, { foreignKey: 'organizationId' });
    }
  };
  Slide.init({
    imageUrl: DataTypes.STRING,
    text: DataTypes.STRING,
    order: DataTypes.STRING,
    organizationId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Slide',
    paranoid: true,
    timestamps: true
  });
  return Slide;
};
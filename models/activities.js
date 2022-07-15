'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activities.init({
    id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    name: { 
      type:DataTypes.VARCHAR,
      allowNull: false,
    },
    content: { 
      type:DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  }, {
    sequelize,
    paranoid:true, // soft delete
    timestamp:true,
    modelName: 'Activities',
  });
  return Activities;
};
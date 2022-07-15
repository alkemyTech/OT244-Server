'use strict';
const {  Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Role.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    description: {
      type: DataTypes.VARCHAR,
      allowNull: true
    },
  }, { timestamps:true},{
    sequelize,
    modelName: 'Role',
    paranoid: true
  });
  return Role;
};
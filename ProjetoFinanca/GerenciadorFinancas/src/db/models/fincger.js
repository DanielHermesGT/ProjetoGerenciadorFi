'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FincGer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FincGer.init({
    saldo: DataTypes.INTEGER,
    ganhos: DataTypes.INTEGER,
    despesas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FincGer',
  });
  return FincGer;
};
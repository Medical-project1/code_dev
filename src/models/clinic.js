'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Clinic.init({
    address:DataTypes.STRING,
    description:DataTypes.TEXT,
    image:DataTypes.STRING,
    name:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clinic ',    // Tên bảng trong cơ sở dữ liệu
    timestamps: true         // Nếu bạn muốn sử dụng timestamps
  });

  return Clinic;
};
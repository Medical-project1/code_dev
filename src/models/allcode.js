'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Allcode.init({
    key: DataTypes.STRING,
    type:DataTypes.STRING,
    value_En:DataTypes.STRING,
    value_Vi:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allcode ',    // Tên bảng trong cơ sở dữ liệu
    timestamps: true         // Nếu bạn muốn sử dụng timestamps
  });

  return Allcode;
};
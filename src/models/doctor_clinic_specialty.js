'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Booking.init({
    doctorId:DataTypes.INTEGER,
    clinicIdId:DataTypes.INTEGER,
    specialtyId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Booking ',    // Tên bảng trong cơ sở dữ liệu
    timestamps: true         // Nếu bạn muốn sử dụng timestamps
  });

  return Booking;
};
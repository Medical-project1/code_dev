'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  User.init({
    firstName: {
      type: DataTypes.STRING,
           // Cho phép giá trị null nếu cần
    },
    lastName: {
      type: DataTypes.STRING,
       // Cho phép giá trị null nếu cần
    },
    email: {
      type: DataTypes.STRING,   // Cho phép giá trị null nếu cần
    },
    password:{
      type:DataTypes.STRING,
    },
    address:{
      type:DataTypes.STRING,
    },
    gender: {
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    roleid: {
      type:DataTypes.STRING,
      allowNull:false
    },
    typeRole:DataTypes.STRING,
    keyRole:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User ',    // Tên bảng trong cơ sở dữ liệu
    timestamps: true         // Nếu bạn muốn sử dụng timestamps
  });

  return User;
};
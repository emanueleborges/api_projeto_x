'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      //User.hasMany(models.Device, {
      //User.belongsTo(models.Device, {
      //  foreignKey: 'User_fk'
      //});
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Essse campo n�o pode ser nulo!" ,
        },
        len: {
          args: [1, 128],
          msg: "Essse campo deve ter entre 1 e 128 caracteres!" ,
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Essse campo n�o pode ser nulo!" ,
        },
        len: {
          args: [1, 128],
          msg: "Essse campo deve ter entre 1 e 128 caracteres!" ,
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 128],
          msg: "Essse campo deve ter entre 1 e 128 caracteres!" ,
        },
      }
    },
    photo: {
      type: DataTypes.STRING,
    },
  },
   {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false, 
  });
  return User;
};
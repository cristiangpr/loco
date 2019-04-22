'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    notes:  DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};

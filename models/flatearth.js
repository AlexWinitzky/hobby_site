'use strict';
module.exports = (sequelize, DataTypes) => {
  var Flatearth = sequelize.define('Flatearth', {
    evidence: DataTypes.STRING,
    photos: DataTypes.STRING
  }, {});
  Flatearth.associate = function(models) {
    // associations can be defined here
  };
  return Flatearth;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const MacroData = sequelize.define('MacroData', {
    gdp: DataTypes.DECIMAL,
    gdp_per_capita: DataTypes.DECIMAL,
    inflation_rate: DataTypes.DECIMAL,
    unemployment_rate: DataTypes.DECIMAL,
    country: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    },
      tableName: 'macro_data',
      timestamps: false,
      schema: 'shard_1'
  });
  MacroData.removeAttribute('id');
  return MacroData;
};
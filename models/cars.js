"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cars.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Cars.init(
    {
      vehicle: DataTypes.STRING,
      lastOilChangeMileage: DataTypes.INTEGER,
      nextOilChangeMileage: DataTypes.INTEGER,
      lastTireRotationMileage: DataTypes.INTEGER,
      nextTireRotationMilage: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cars",
    }
  );
  return Cars;
};

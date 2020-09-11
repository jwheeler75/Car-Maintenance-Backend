"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vehicle: {
        type: Sequelize.STRING,
      },
      lastOilChangeMileage: {
        type: Sequelize.INTEGER,
      },
      nextOilChangeMileage: {
        type: Sequelize.INTEGER,
      },
      lastTireRotationMileage: {
        type: Sequelize.INTEGER,
      },
      nextTireRotationMileage: {
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cars");
  },
};

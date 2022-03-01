'use strict';

module.exports = {
  /**
   * @param { import("sequelize/types").QueryInterface } queryInterface
   * @param { import("sequelize") } Sequelize */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
       },
       name: {
         type: Sequelize.STRING(100),
         allowNull: false,
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface) {
     await queryInterface.dropTable('users');
  }
};

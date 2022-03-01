'use strict';

module.exports = {
  /**
   * @param { import("sequelize/types").QueryInterface } queryInterface
   * @param { import("sequelize") } Sequelize */
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('techs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('techs');
  }
};

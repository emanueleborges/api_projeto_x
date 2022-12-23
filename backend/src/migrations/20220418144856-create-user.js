'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example: 
     * await queryInterface.createTable('users', { id:Sequelize.INTEGER });
     */
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING(125),
        validate: { notNull: true },
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING(125),
        validate: { notNull: true },
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING(125),
        validate: { notNull: true },
      },
      Photo: {
        allowNull: false,
        type: Sequelize.STRING(125),
        validate: { notNull: false },
      }

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('User');
  }
};

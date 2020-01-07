module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'type_posts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
      }
    );
  },
  down: queryInterface => {
    return queryInterface.dropTable('type_posts');
  },
};

import Sequelize, { Model } from 'sequelize';

class TypePost extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default TypePost;

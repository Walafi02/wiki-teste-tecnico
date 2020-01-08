import Sequelize, { Model } from 'sequelize';
import SequelizePaginate from 'sequelize-paginate';

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.TypePost, {
      foreignKey: 'type_post_id',
      as: 'type',
    });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

SequelizePaginate.paginate(Post);
export default Post;

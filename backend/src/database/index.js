import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import TypePost from '../app/models/TypePost';
import Post from '../app/models/Post';
import File from '../app/models/File';

const models = [User, TypePost, Post, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

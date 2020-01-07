import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';
import Post from '../models/Post';
import TypePost from '../models/TypePost';

class SigninController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fields' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    const typePosts = await TypePost.findAll({
      attributes: ['id', 'title'],
    });

    let postsCount = []; // eslint-disable-line

    for (let i = 0; i < typePosts.length; i++) {
      const element = typePosts[i];
      const count = await Post.count({
        where: {
          type_post_id: element.id,
        },
      });

      postsCount.push({
        id: element.id,
        title: element.title,
        count,
      });
    }

    return res.json({
      user: {
        id,
        name,
        email,
      },
      postsCount,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SigninController();

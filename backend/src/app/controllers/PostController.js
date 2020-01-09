import * as Yup from 'yup';

import Post from '../models/Post';
import TypePost from '../models/TypePost';
import File from '../models/File';

class PostController {
  async index(req, res) {
    const { id } = req.params;
    const { page = 1, paginate = 10, type_post_id = [1, 2, 3, 4] } = req.query;

    const posts = id
      ? await Post.findByPk(id, {
          include: [
            {
              model: File,
              as: 'file',
              attributes: ['id', 'path', 'url', 'name'],
            },
          ],
        })
      : await Post.paginate({
          where: {
            user_id: req.id,
            type_post_id,
          },
          include: [
            {
              model: TypePost,
              as: 'type',
              attributes: ['id', 'title'],
            },
            {
              model: File,
              as: 'file',
              attributes: ['id', 'path', 'url', 'name'],
            },
          ],
          page,
          paginate,
          order: [['updatedAt', 'DESC']],
        });

    if (id && posts == null)
      return res.status(400).json({ error: 'ID not found' });

    return res.json(posts);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string().required(),
      type_post_id: Yup.number().required(),
      file_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fields' });
    }

    const { title, content, type_post_id, file_id } = req.body;
    const { id } = req;

    const post = await Post.create({
      title,
      content,
      type_post_id,
      user_id: id,
      file_id,
    });

    return res.json(post);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string().required(),
      type_post_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fields' });
    }

    const { id } = req.params;

    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(400).json({ error: 'Post not found' });
    }

    if (req.id !== post.user_id) {
      return res.status(400).json({ error: 'User does not have permissions' });
    }

    const postUpdate = await post.update(req.body);

    return res.json(postUpdate);
  }

  async delete(req, res) {
    const { id } = req.params;

    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(400).json({ error: 'Post does not exist' });
    }

    await post.destroy();

    return res.json();
  }
}

export default new PostController();

import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      repassword: Yup.string()
        .required()
        .min(6)
        .when('password', {
          is: value => value && value.length > 0,
          then: Yup.string().oneOf([Yup.ref('password'), null]),
        }),
      then: Yup.string().oneOf([Yup.ref('password'), null]),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fields' });
    }

    const useExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (useExist) {
      return res.status(400).json({ error: 'user already exists.' });
    }

    const { id, name, email } = await User.create(req.body);
    return res.json({ id, name, email });
  }
}

export default new UserController();

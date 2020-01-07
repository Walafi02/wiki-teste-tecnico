import { Router } from 'express';

import authMiddleware from './app/middleware/auth';

import SigninController from './app/controllers/SigninController';
import UserController from './app/controllers/UserController';
import PostController from './app/controllers/PostController';

const routes = new Router();

routes.post('/signin', SigninController.store);
routes.post('/signup', UserController.store);

routes.use(authMiddleware);

routes.get('/posts/:id?', PostController.index);
routes.post('/posts', PostController.store);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

export default routes;

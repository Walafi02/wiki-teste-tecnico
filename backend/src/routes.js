import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import authMiddleware from './app/middleware/auth';

import SigninController from './app/controllers/SigninController';
import UserController from './app/controllers/UserController';
import PostController from './app/controllers/PostController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/signin', SigninController.store);
routes.post('/signup', UserController.store);

routes.use(authMiddleware);

routes.get('/posts/:id?', PostController.index);
routes.post('/posts', PostController.store);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;

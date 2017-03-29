import { Router } from 'express';

import MetaController from './controllers/meta.controller';
import AuthController from './controllers/auth.controller';
import PostsController from './controllers/posts.controller';

import authenticate from './middleware/authenticate';
import accessControl from './middleware/access-control';
import errorHandler from './middleware/error-handler';

const routes = new Router();

routes.get('/', MetaController.index);

// Authentication
routes.post('/auth/login', AuthController.login);

// Post
routes.get('/posts', PostsController.search);
routes.post('/posts', authenticate, PostsController.create);
routes.get('/posts/:id', PostsController._populate, PostsController.fetch);
routes.delete('/posts/:id', authenticate, PostsController.delete);

routes.use(errorHandler);

export default routes;

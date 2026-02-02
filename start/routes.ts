/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js';

router.group(() => {
  router.post('/login', [AuthController, 'login']);
  router.get('/me', [AuthController, 'me'])
}).prefix('auth')

router.group(() => {
  router.get('/me', [AuthController, 'me']);
  
})
  .prefix('api/v1')
  .use(middleware.auth({ guards: ['api'] }))

router.get('/', async () => {
  return {
    version: '1.0',
  }
})

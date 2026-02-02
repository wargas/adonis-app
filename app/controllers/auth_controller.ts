import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger';
import { write } from 'bun'


export default class AuthController {
    async login({ }: HttpContext) {
        const user = await User.findOrFail(1);

        const token = await User.accessTokens.create(user, [], {
            name: 'auth-api', expiresIn: '3 hours'
        });

        return token;
    }

    async me({ auth }: HttpContext) {
        
        await write('data.json', JSON.stringify(auth.user))

        
        return {
            email: auth.user?.id
        }
    }
} 
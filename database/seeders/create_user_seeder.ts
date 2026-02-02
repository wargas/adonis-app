import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await User.create({
      email: 'admin@deltex.com.br',
      password: 'wrgs',
      fullName: 'Wargas Teixeira'
    })
    // Write your databUase queries inside the run method
  }
}
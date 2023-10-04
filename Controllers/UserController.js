const knex = require('../database/database');
const UserService = require('../service/User');

class UserController {
    async getAllUsers(req, res) {
        const users = await knex('users').select('*');
        res.json(users);
    }

    async getUserById(req, res) {
        const id = req.params.id;

        const users = await knex('users').select('*').where('id', id);

        res.json(users[0]);
    }

    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.json(user);
        } catch (error) {
            console.error(error);
        }
    }

    async updateUser(req, res) {
        const id = req.params.id;
        const user = req.body;

        const verif = await knex('users').where('id', id).update(user);

        if(verif >= 1){
            res.json({ message: `Success`, boolean: true });
        }else{
            res.json({ message: `Error`, boolean: false });
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id;

        const verif = await knex('users').where('id', id).del();
        if(verif === 1){
            res.json({ message: `Success`, boolean: true });
        }else{
        res.json({ message: `Error`, boolean: false });
        }
    }

    async getRandomUser(req, res) {
        const users = await knex('users').select('*');
        const random = Math.floor(Math.random() * users.length);
        res.json(users[random]);
    }

}

module.exports = new UserController();
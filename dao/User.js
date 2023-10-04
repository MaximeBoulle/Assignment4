const database = require('../database/database');

class UserDAO {
    async createUser(name_, username_, email_) {
        const user = await database('users').insert({
            name: name_,
            username: username_,
            email: email_,
        }).returning('*');
        return user;
    }
}

module.exports = new UserDAO();
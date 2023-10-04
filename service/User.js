const UserDAO = require('../dao/User');

class UserService {
    createUser(userDto) {
        const { name, username, email } = userDto;
        return UserDAO.createUser(name, username, email);
    }
}

module.exports = new UserService();


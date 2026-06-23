"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../Repositories/UserRepository");
const User_1 = require("../Models/User");
class UserController {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    registerUser(id, name, email, preference) {
        const newUser = new User_1.User(id, name, email, preference);
        this.userRepository.save(newUser);
        return newUser;
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map
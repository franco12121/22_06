import { User } from "../Models/User.js";
export class UserController {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    registerUser(id, name, email, preference) {
        const newUser = new User(id, name, email, preference);
        this.userRepository.save(newUser);
        return newUser;
    }
}

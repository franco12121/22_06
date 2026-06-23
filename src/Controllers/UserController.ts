import { UserRepository } from "../Repositories/UserRepository.js";
import { User } from "../Models/User.js";

export class UserController {
    constructor(private userRepository: UserRepository) {}

    public registerUser(id: string, name: string, email: string, preference: "Email" | "SMS" | "Push"): User {
        const newUser = new User(id, name, email, preference);
        this.userRepository.save(newUser);
        return newUser;
    }
}

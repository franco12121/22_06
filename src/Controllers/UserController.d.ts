import { UserRepository } from "../Repositories/UserRepository";
import { User } from "../Models/User";
export declare class UserController {
    private userRepository;
    constructor(userRepository: UserRepository);
    registerUser(id: string, name: string, email: string, preference: "Email" | "SMS" | "Push"): User;
}
//# sourceMappingURL=UserController.d.ts.map
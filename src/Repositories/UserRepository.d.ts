import { User } from "../Models/User";
import { DatabaseConnection } from "../Config/DatabaseConnection";
export declare class UserRepository {
    private db;
    constructor(db: DatabaseConnection);
    save(user: User): void;
    findById(id: string): User | undefined;
}
//# sourceMappingURL=UserRepository.d.ts.map
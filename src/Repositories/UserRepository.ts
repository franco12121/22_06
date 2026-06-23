import { User } from "../Models/User.js";
import { DatabaseConnection } from "../Config/DatabaseConnection.js";

export class UserRepository {
    constructor(private db: DatabaseConnection) {}

    public save(user: User): void {
        this.db.users.push(user);
    }

    public findById(id: string): User | undefined {
        return this.db.users.find((u: User) => u.id === id);
    }
}

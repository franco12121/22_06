import { User } from "../Models/User";
import { Subscription } from "../Models/Subscription";
export declare class DatabaseConnection {
    private static instance;
    users: User[];
    subscriptions: Subscription[];
    private constructor();
    static getInstance(): DatabaseConnection;
}
//# sourceMappingURL=DatabaseConnection.d.ts.map
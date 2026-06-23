import { User } from "../Models/User.js";
import { Subscription } from "../Models/Subscription.js";

export class DatabaseConnection {
    private static instance: DatabaseConnection | null = null;
    public users: User[] = [];
    public subscriptions: Subscription[] = [];

    private constructor() {}

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}

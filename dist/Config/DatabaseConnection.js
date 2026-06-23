export class DatabaseConnection {
    static instance = null;
    users = [];
    subscriptions = [];
    constructor() { }
    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}

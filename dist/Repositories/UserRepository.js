export class UserRepository {
    db;
    constructor(db) {
        this.db = db;
    }
    save(user) {
        this.db.users.push(user);
    }
    findById(id) {
        return this.db.users.find((u) => u.id === id);
    }
}

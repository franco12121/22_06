"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../Models/User");
const DatabaseConnection_1 = require("../Config/DatabaseConnection");
class UserRepository {
    db;
    constructor(db) {
        this.db = db;
    }
    save(user) {
        this.db.users.push(user);
    }
    findById(id) {
        return this.db.users.find(u => u.id === id);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map
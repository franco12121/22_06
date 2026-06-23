"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    email;
    notificationPreference;
    isPremium;
    constructor(id, name, email, notificationPreference, isPremium = false) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.notificationPreference = notificationPreference;
        this.isPremium = isPremium;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map
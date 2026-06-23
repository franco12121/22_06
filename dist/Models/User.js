export class User {
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

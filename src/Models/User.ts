export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public notificationPreference: "Email" | "SMS" | "Push",
        public isPremium: boolean = false
    ) {}
}

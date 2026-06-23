export class Subscription {
    constructor(
        public id: string,
        public userId: string,
        public planType: "Premium Mensual" | "Premium Anual",
        public status: "Pending" | "Active" | "Cancelled",
        public price: number
    ) {}
}

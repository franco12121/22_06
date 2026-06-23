export class Subscription {
    id;
    userId;
    planType;
    status;
    price;
    constructor(id, userId, planType, status, price) {
        this.id = id;
        this.userId = userId;
        this.planType = planType;
        this.status = status;
        this.price = price;
    }
}

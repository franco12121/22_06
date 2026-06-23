"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
class Subscription {
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
exports.Subscription = Subscription;
//# sourceMappingURL=Subscription.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const User_1 = require("../Models/User");
class PaymentService {
    observers = [];
    attach(observer) {
        this.observers.push(observer);
    }
    processPayment(user, amount) {
        user.isPremium = true;
        for (const observer of this.observers) {
            observer.update(user, amount);
        }
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=PaymentService.js.map
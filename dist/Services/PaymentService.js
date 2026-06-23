export class PaymentService {
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

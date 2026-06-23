import { User } from "../Models/User.js";

export interface IObserver {
    update(user: User, amount: number): void;
}

export class PaymentService {
    private observers: IObserver[] = [];

    public attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    public processPayment(user: User, amount: number): void {
        user.isPremium = true;
        for (const observer of this.observers) {
            observer.update(user, amount);
        }
    }
}

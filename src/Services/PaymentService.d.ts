import { User } from "../Models/User";
export interface IObserver {
    update(user: User, amount: number): void;
}
export declare class PaymentService {
    private observers;
    attach(observer: IObserver): void;
    processPayment(user: User, amount: number): void;
}
//# sourceMappingURL=PaymentService.d.ts.map
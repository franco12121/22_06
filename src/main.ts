import { DatabaseConnection } from "./Config/DatabaseConnection.js";
import { UserRepository } from "./Repositories/UserRepository.js";
import { UserController } from "./Controllers/UserController.js";
import { PaymentService, IObserver } from "./Services/PaymentService.js";
import { User } from "./Models/User.js";

class LoggerObserver implements IObserver {
    update(user: User, amount: number): void {
        console.log(`? [Notificación]: ${user.name} ahora es Premium. Cobrado: $${amount}`);
    }
}

const db = DatabaseConnection.getInstance();
const repo = new UserRepository(db);
const controller = new UserController(repo);
const paymentService = new PaymentService();

paymentService.attach(new LoggerObserver());

const franco = controller.registerUser("1", "Franco Cordoba", "franco@email.com", "Email");
paymentService.processPayment(franco, 1500);

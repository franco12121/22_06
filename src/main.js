"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseConnection_1 = require("./Config/DatabaseConnection");
const UserRepository_1 = require("./Repositories/UserRepository");
const UserController_1 = require("./Controllers/UserController");
const PaymentService_1 = require("./Services/PaymentService");
const User_1 = require("./Models/User");
class LoggerObserver {
    update(user, amount) {
        console.log(`? [Notificaci�n]: ${user.name} ahora es Premium. Cobrado: $${amount}`);
    }
}
const db = DatabaseConnection_1.DatabaseConnection.getInstance();
const repo = new UserRepository_1.UserRepository(db);
const controller = new UserController_1.UserController(repo);
const paymentService = new PaymentService_1.PaymentService();
paymentService.attach(new LoggerObserver());
const franco = controller.registerUser("1", "Franco Cordoba", "franco@email.com", "Email");
paymentService.processPayment(franco, 1500);
//# sourceMappingURL=main.js.map
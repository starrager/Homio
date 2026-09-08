"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
const PORT = process.env.PORT;
require("./cron/orders.cron");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const data_routes_1 = __importDefault(require("./routes/data.routes"));
const password_router_1 = __importDefault(require("./routes/password.router"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const orders_routes_1 = __importDefault(require("./routes/orders.routes"));
app.use('/auth', auth_routes_1.default);
app.use('/data', data_routes_1.default);
app.use('/password', password_router_1.default);
app.use('/order', order_routes_1.default);
app.use('/orders', orders_routes_1.default);
app.listen(PORT, () => {
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`);
});

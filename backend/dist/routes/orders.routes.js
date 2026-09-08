"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware/middleware");
const orders_controller_1 = require("../controllers/orders.controller");
const router = (0, express_1.Router)();
router.get('/', middleware_1.middleware, orders_controller_1.getOrders);
router.get('/history', middleware_1.middleware, orders_controller_1.getHistory);
exports.default = router;

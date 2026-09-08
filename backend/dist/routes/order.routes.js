"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware/middleware");
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.Router)();
router.post('/', middleware_1.middleware, order_controller_1.createOrder);
exports.default = router;

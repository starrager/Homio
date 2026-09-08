"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware/middleware");
const passowrd_controler_1 = require("../controllers/passowrd.controler");
const router = (0, express_1.Router)();
router.put('/', middleware_1.middleware, passowrd_controler_1.changePassword);
exports.default = router;

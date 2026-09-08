"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const createOrder = async (req, res) => {
    try {
        const { service, address, scheduledTime, comment, estimatedPrice } = req.body;
        const userId = req.userId;
        const scheduledDate = new Date(req.body.scheduledDate);
        if (!userId)
            return res.status(401).json({ error: 'not authorized' });
        const order = await prisma_1.default.order.create({
            data: {
                orderNumber: Math.floor(Math.random() * 1000),
                userId: userId,
                service,
                address,
                scheduledDate,
                scheduledTime,
                comment,
                estimatedPrice,
                status: 'New'
            }
        });
        await prisma_1.default.orderStatusHistory.create({
            data: {
                orderId: order.id,
                status: 'NEW',
                description: comment,
                changedBy: userId
            }
        });
        res.json(order);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'make an order error' });
    }
};
exports.createOrder = createOrder;

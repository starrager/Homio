"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistory = exports.getOrders = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const getOrders = async (req, res) => {
    try {
        const user = await prisma_1.default.user.findUnique({ where: { id: req.userId } });
        if (!user)
            return res.status(400).json({ error: 'user not found' });
        const orders = await prisma_1.default.order.findMany({
            where: {
                userId: req.userId,
                status: {
                    in: ['New', 'IN_PROGRESS']
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        res.json(orders);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'get orders error' });
    }
};
exports.getOrders = getOrders;
const getHistory = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await prisma_1.default.order.findMany({
            where: {
                userId,
                status: {
                    in: ['COMPLETED', 'CANCELED']
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        res.json(orders);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'error get orders history' });
    }
};
exports.getHistory = getHistory;

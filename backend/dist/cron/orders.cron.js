"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
const node_cron_1 = __importDefault(require("node-cron"));
node_cron_1.default.schedule('*/30 * * * * *', async () => {
    try {
        const now = new Date();
        const newOrders = await prisma_1.default.order.findMany({
            where: {
                status: 'New',
                scheduledDate: { lte: now }
            }
        });
        for (const order of newOrders) {
            await prisma_1.default.order.update({
                where: { id: order.id },
                data: { status: 'IN_PROGRESS' }
            });
            await prisma_1.default.orderStatusHistory.create({
                data: {
                    orderId: order.id,
                    status: "IN_PROGRESS",
                    description: 'заказ пришел в работу',
                    changedBy: 'system'
                }
            });
        }
        const twoHoursAge = new Date(now.getTime() - 2 * 60 * 60 * 1000);
        const inProgressOrders = await prisma_1.default.order.findMany({
            where: {
                status: 'IN_PROGRESS',
                updatedAt: { lte: twoHoursAge }
            }
        });
        for (const order of inProgressOrders) {
            await prisma_1.default.order.update({
                where: { id: order.id },
                data: { status: 'COMPLETED' }
            });
            await prisma_1.default.orderStatusHistory.create({
                data: {
                    orderId: order.id,
                    status: "COMPLETED",
                    description: 'заказ выполнен',
                    changedBy: 'system'
                }
            });
        }
    }
    catch (error) {
        console.error(error);
    }
});

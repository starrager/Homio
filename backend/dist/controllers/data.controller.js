"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeEmail = exports.changeName = exports.setNotifications = exports.setAddress = exports.setPhone = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const setPhone = async (req, res) => {
    try {
        const userId = req.userId;
        const { phone } = req.body;
        const user = await prisma_1.default.user.findUnique({ where: { id: userId } });
        if (!user)
            return res.status(400).json({ error: 'not authorized' });
        const userWithPhone = await prisma_1.default.user.update({
            where: { id: userId },
            data: { phone }
        });
        res.json({ phone: userWithPhone.phone });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'set phone error' });
    }
};
exports.setPhone = setPhone;
const setAddress = async (req, res) => {
    try {
        const userId = req.userId;
        const { address } = req.body;
        const user = await prisma_1.default.user.findUnique({ where: { id: userId } });
        if (!user)
            return res.status(400).json({ error: 'not authorized' });
        const userWithAddress = await prisma_1.default.user.update({
            where: { id: userId },
            data: { address }
        });
        res.json({ address: userWithAddress.address });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'set address error' });
    }
};
exports.setAddress = setAddress;
const setNotifications = async (req, res) => {
    try {
        const userId = req.userId;
        const { order, reminders, news } = req.body;
        const user = await prisma_1.default.user.update({
            where: { id: userId },
            data: {
                order: order,
                reminders: reminders,
                news: news
            }
        });
        res.json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'set notifications error' });
    }
};
exports.setNotifications = setNotifications;
const changeName = async (req, res) => {
    try {
        const userId = req.userId;
        const { firstName, lastName } = req.body;
        const user = await prisma_1.default.user.update({
            where: { id: userId },
            data: {
                nameFirst: firstName,
                nameLast: lastName
            }
        });
        res.json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'change name error' });
    }
};
exports.changeName = changeName;
const changeEmail = async (req, res) => {
    try {
        const userId = req.userId;
        const { email } = req.body;
        const user = await prisma_1.default.user.update({
            where: { id: userId },
            data: {
                email: email
            }
        });
        res.json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'change email error' });
    }
};
exports.changeEmail = changeEmail;

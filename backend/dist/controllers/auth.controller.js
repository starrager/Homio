"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.login = exports.register = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
const register = async (req, res) => {
    try {
        const { email, nameFirst, nameLast, password } = req.body;
        const userExisting = await prisma_1.default.user.findUnique({ where: { email: email } });
        if (userExisting)
            return res.status(400).json({ error: 'user already exists' });
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await prisma_1.default.user.create({
            data: {
                nameFirst,
                nameLast,
                email,
                password: hashedPassword,
            }
        });
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        const { password: userPassword, ...userWithoutPassoword } = user;
        res.status(200).json({ token, user: userWithoutPassoword });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'register error' });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma_1.default.user.findUnique({ where: { email: email } });
        if (!user)
            return res.status(404).json({ error: 'user not found' });
        const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!isValidPassword)
            return res.status(401).json({ error: 'invalid password' });
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        const { password: userPassword, ...userWithoutPassword } = user;
        res.status(200).json({ token, user: userWithoutPassword });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'login error' });
    }
};
exports.login = login;
const getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await prisma_1.default.user.findUnique({ where: { id: userId } });
        if (!user)
            return res.status(400).json({ error: 'not authorized' });
        res.json({
            firstName: user.nameFirst,
            lastName: user.nameLast,
            email: user.email,
            phone: user.phone,
            address: user.address,
            order: user.order,
            reminders: user.reminders,
            news: user.news
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'get profile error' });
    }
};
exports.getProfile = getProfile;

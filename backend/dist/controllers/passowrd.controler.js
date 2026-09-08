"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const changePassword = async (req, res) => {
    try {
        const userId = req.userId;
        const { currentPassword, newPassword, confirmPassword } = req.body;
        if (!confirmPassword || !newPassword || !currentPassword)
            return res.status(500).json({ error: 'change password error' });
        if (confirmPassword !== newPassword)
            return res.status(500).json({ error: 'change password error' });
        const user = await prisma_1.default.user.findUnique({ where: { id: userId } });
        if (!user)
            return res.status(400).json({ error: 'not authorized' });
        const isValidPassword = await bcryptjs_1.default.compare(currentPassword, user.password);
        if (!isValidPassword)
            return res.status(400).json({ error: 'wrong password' });
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, 10);
        await prisma_1.default.user.update({
            where: { id: userId },
            data: { password: hashedPassword }
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'change password error' });
    }
};
exports.changePassword = changePassword;

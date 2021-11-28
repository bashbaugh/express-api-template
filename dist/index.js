"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api = (0, express_1.default)();
api.disable('x-powered-by');
api.use((0, cors_1.default)({
    origin: false,
    // allowedHeaders: ['Authorization'],
    maxAge: 7200,
}));
api.get('/', (_, res) => {
    res.send('Hey 😎');
});
api.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
});
async function start() {
    api.listen(process.env.PORT || 3001, () => console.log('🤘 API Listening 🧨'));
}
start();
//# sourceMappingURL=index.js.map
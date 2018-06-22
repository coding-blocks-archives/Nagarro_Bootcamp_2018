"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
let x = 10;
x = 'asdas';
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3333, () => {
    console.log('Server started on http://localhost:3333');
});
//# sourceMappingURL=server.js.map
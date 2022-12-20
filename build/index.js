"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
// set endpoint
app.get('/api', (req, res) => {
    res.send("Hello, World.");
});
// check for pot to avoid already in use error testing
app.listen(port, () => console.log(`Listening on port ${port}`));
exports.default = app;

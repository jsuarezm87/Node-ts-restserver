"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('test', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map
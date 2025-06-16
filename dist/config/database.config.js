"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.databaseConfig = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '', 10) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: process.env.NODE_ENV !== 'production',
    logging: true
};
//# sourceMappingURL=database.config.js.map
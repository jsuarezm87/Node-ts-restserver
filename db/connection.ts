import { Sequelize } from 'sequelize';

const db = new Sequelize('test', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
    // logging: false
});


export default db;

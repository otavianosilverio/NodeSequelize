import { Sequelize } from 'sequelize';
import db from '../db.js';

export default db.define('clientes', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
})
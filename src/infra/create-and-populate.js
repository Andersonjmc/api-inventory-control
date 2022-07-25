// banco de dados com moongose
const mongoose = require('mongoose').verbose();
const db = new mongoose.Database('./src/infra/database.db');

// -Produtos-
const categorias = `create table if not exists "categorias" (
    "id" integer primary key autoincrement,
    "nome" varchar(64),
    "preço" varchar(64),
    "descricao" varchar(64),
    "preço" varchar(64)
);`;

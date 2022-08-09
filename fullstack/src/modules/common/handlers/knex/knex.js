"use strict";

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.WRITER_MYSQL_HOST,
    user: process.env.WRITER_MYSQL_USER,
    port: process.env.WRITER_MYSQL_PORT,
    password: process.env.WRITER_MYSQL_PASS,
    database: "main",
  },
  pool: {
    min: 0,
    max: 4,
  },
  debug: true,
});

const getTransaction = async () => {
  const transaction = await knex.transaction();

  return { transaction };
};

const commitTransaction = ({ transaction }) => transaction.commit();

const rollbackTransaction = ({ transaction }) => transaction.rollback();

module.exports = {
  getTransaction,
  commitTransaction,
  rollbackTransaction,
  client: knex,
};

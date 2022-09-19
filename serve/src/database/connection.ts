import knex from 'knex';

import {config} from 'dotenv';
config();

const connection = knex({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    },
});

export default connection;
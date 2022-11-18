import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("server_logs", (table) => {
    table.increments("id").primary();
    table.string("message").nullable();
    table.string("url").nullable();
    table.string("stack").nullable();
    table.timestamp("created_at").notNullable();
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("server_logs");
}
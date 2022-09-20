import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ats_candidates", (table) => {
    table.increments("id").primary();
    table.string("candidate").notNullable();
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("ats_candidates");
}

import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ats_vacancies", (table) => {
    table.increments("id").primary();
    table.string("vacancy").notNullable();
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("ats_vacancies");
}

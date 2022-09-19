import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ats_subscribers_list", (table) => {
    table.increments("id").primary();
    table.integer("vacancy_id").unsigned();
    table.foreign('ats_vacancies').references('ats_vacancies.id');
    table.integer("candidate_id").unsigned();
    table.foreign('ats_candidates').references('ats_candidates.id');
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("ats_subscribers_list");
}

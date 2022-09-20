import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ats_subscribers_list", (table) => {
    table.increments("id").primary();
    table.integer("vacancy_id").unsigned();
    table.foreign('vacancy_id').references('id').inTable('ats_vacancies').onDelete('CASCADE');
    table.integer("candidate_id").unsigned();
    table.foreign('candidate_id').references('id').inTable('ats_candidates').onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("ats_subscribers_list");
}

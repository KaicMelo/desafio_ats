import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ats_resume", (table) => {
    table.increments("id").primary();
    table.integer("candidate_id").unsigned();
    table.foreign('candidate_id').references('id').inTable('ats_candidates').onDelete('CASCADE');
    table.string("address").nullable();
    table.integer("address_number").nullable();
    table.date("birthday").nullable();
    table.string("email").nullable();
    table.string("genre").nullable();
    table.text("hobbies").nullable();
    table.string("name").nullable();
    table.string("phone").nullable();
    table.text("short_description").nullable();
    table.string("state").nullable();
    table.integer("wage").nullable();
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("ats_resume");
}
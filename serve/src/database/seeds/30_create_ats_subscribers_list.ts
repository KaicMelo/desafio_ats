import { Knex } from "knex";
export async function seed(knex: Knex) {
  await knex("ats_subscribers_list").insert([
    {
      vacancy_id: 1,
      candidate_id: 1,
    },
    {
      vacancy_id: 2,
      candidate_id: 1,
    },
    {
      vacancy_id: 3,
      candidate_id: 1,
    },
    {
      vacancy_id: 1,
      candidate_id: 2,
    },
    {
      vacancy_id: 2,
      candidate_id: 2,
    },
    {
      vacancy_id: 3,
      candidate_id: 2,
    },
    {
      vacancy_id: 4,
      candidate_id: 2,
    },
    {
      vacancy_id: 5,
      candidate_id: 2,
    },
  ]);
}

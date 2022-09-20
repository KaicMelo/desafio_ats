import { Knex } from "knex";
export async function seed(knex: Knex) {
  await knex("ats_candidates").insert([
    {
      candidate: "Kaic Melo Santos",
    },
    {
      candidate: "Gustavo Maranho",
    },
    {
      candidate: "Taka",
    },
    {
      candidate: "Graziella",
    },
    {
      candidate: "Renan",
    },
  ]);
}

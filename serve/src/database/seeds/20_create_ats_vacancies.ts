import { Knex } from "knex";
export async function seed(knex: Knex) {
  await knex("ats_vacancies").insert([
    {
      vacancy: "Analista De Desenvolvimento",
    },
    {
      vacancy: "RH",
    },
    {
      vacancy: "Administrativo",
    },
    {
      vacancy: "TI",
    },
    {
      vacancy: "Planejamento",
    }
  ]);
}

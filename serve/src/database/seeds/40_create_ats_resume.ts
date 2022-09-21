import { Knex } from "knex";
export async function seed(knex: Knex) {
  await knex("ats_resume").insert([
    {
      candidate_id: 1,
      address: "Rua manguari",
      address_number: 501,
      birthday: "1995-06-16",
      email: "kaic.melo@totvs.com.br",
      genre: "Homem",
      hobbies: "Futebol",
      name: "Kaic Melo Santos",
      phone: "11958587700",
      short_description:
        "Analista De Desenvolvimento\nProgramador\nDesenvolvedor de software\nGamer",
      state: "São Paulo",
      wage: 50000,
    },
  ]);
}

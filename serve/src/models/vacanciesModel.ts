import knex from "../database/connection";

class vacanciesModel {
  async index() {
    return knex("ats_vacancies").select("*");
  }
  async store(vacancy: any) {
    return knex("ats_vacancies").insert(vacancy);
  }
  async update(id: any, vacancy: object) {
    return knex("ats_vacancies").where("id", id).update(vacancy);
  }
  async destroy(id: any) {
    return knex("ats_vacancies").where("id", id).delete();
  }
}

export default vacanciesModel;

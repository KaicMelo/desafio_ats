import knex from "../database/connection";

class candidateModel {
  async index() {
    return knex("ats_candidates").select("*");
  }
  async store(candidate: any) {
    return knex("ats_candidates").insert(candidate);
  }
  async update(id: any, candidate: object) {
    return knex("ats_candidates").where("id", id).update(candidate);
  }
  async destroy(id: any) {
    return knex("ats_candidates").where("id", id).delete();
  }
}

export default candidateModel;

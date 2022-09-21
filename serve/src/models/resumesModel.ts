import knex from "../database/connection";

class resumesModel {
  async store(resume: any) {
    return knex("ats_resume").insert(resume);
  }
  async update(id: any, resume: object) {
    return knex("ats_resume").where("id", id).update(resume);
  }
  async destroy(id: any) {
    return knex("ats_resume").where("id", id).delete();
  }
}

export default resumesModel;

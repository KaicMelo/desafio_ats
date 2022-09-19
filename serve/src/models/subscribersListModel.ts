import knex from "../database/connection";

class subscribersListModel {
  async index() {
    return knex("ats_subscribers_list")
      .select("*")
      .leftJoin("ats_candidates", function () {
        this.on("ats_subscribers_list.candidate_id", "ats_candidates.id");
      })
      .leftJoin("ats_vacancies", function () {
        this.on("ats_subscribers_list.vacancy_id", "ats_vacancies.id");
      }).select('ats_subscribers_list.id','ats_vacancies.vacancy','ats_candidates.candidate')
  }
  async store(subscribersList: any) {
    return knex("ats_subscribers_list").insert(subscribersList);
  }
  async update(id: any, subscribersList: object) {
    return knex("ats_subscribers_list").where("id", id).update(subscribersList);
  }
  async destroy(id: any) {
    return knex("ats_subscribers_list").where("id", id).delete();
  }
}

export default subscribersListModel;

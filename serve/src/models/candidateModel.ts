import knex from "../database/connection";

class candidateModel {
  async index() {
    return knex("ats_candidates").select("*");
  }
  indexWithResume() {
    return knex("ats_candidates")
      .leftJoin("ats_resume", function () {
        this.on("ats_resume.candidate_id", "ats_candidates.id");
      })
      .select(
        "ats_candidates.id",
        "ats_resume.id as resume_id",
        "ats_candidates.candidate",
        "candidate_id",
        "address",
        "address_number",
        "email",
        "genre",
        "hobbies",
        "name",
        "phone",
        "short_description",
        "state",
        "wage",
        knex.raw(
          "DATE_FORMAT(birthday, '%Y-%m-%d') as birthday,case when candidate_id = ats_candidates.id then 'true' else 'false' end as has_resume"
        )
      ).orderBy('ats_candidates.id')
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

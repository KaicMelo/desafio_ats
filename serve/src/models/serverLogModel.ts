import knex from "../database/connection";

class serverLogModel {
  async index() {
    return knex("server_logs").select("*");
  }
  async store(log: any) {
    return knex("server_logs").insert(log);
  }
}

export default serverLogModel;

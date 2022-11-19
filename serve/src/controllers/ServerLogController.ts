import { Request, Response } from "express";
import ServerLogModel from "../models/serverLogModel";

const serverLogModel = new ServerLogModel();

class ServerLogController {
  async index(req: Request, res: Response) {
    const vacancies = await serverLogModel.index();

    if (!vacancies) {
      return res.status(400).json({ message: "Não existe Log" });
    }

    return res.json(vacancies);
  }
  async store(req: Request, res: Response) {
    const log: any = req.body;

    const response = await serverLogModel.store(log);

    if (!response) {
      return res.status(400).json("Erro ao cadastrar log");
    }

    return res.status(201).json(response);
  }
}


export default ServerLogController;

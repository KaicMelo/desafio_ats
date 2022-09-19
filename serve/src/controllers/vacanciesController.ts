import { Request, Response } from "express";
import VacanciesModel from "../models/vacanciesModel";

const vacanciesModel = new VacanciesModel();

class vacanciesController {
  async index(req: Request, res: Response) {
    const vacancies = await vacanciesModel.index();

    if (!vacancies) {
      return res.status(400).json({ message: "Vagas não encontradas" });
    }

    return res.json(vacancies);
  }
  async store(req: Request, res: Response) {
    const vacancies: any = req.body;

    const erros = noEmpty(vacancies);

    if (erros) {
      return res.status(401).json("Erro no corpo da requisição");
    }

    const response = await vacanciesModel.store(vacancies);

    if (!response) {
      return res.status(400).json("Candidato não encontrado");
    }

    return res.status(201).json(response);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;

    const vacancies = req.body;

    const erros = noEmpty(vacancies);

    if (erros) {
      return res.status(401).json("Erro no corpo da requisição");
    }

    const response = await vacanciesModel.update(id, vacancies);

    if (!response) {
      return res.status(400).json("Erro ao atualizar registro");
    }

    return res.json(response).status(200);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const response = await vacanciesModel.destroy(id);

    if (!response) {
      return res.status(400).json("Erro ao deletar registro");
    }

    return res.json("Deletado com sucesso").status(200);
  }
}

function noEmpty(vacancies: any) {  
  if (vacancies.vacancy.trim() === '') {
    return true;
  }

  if (typeof vacancies.vacancy === undefined) {
    return true;
  }

  if (typeof vacancies.vacancy === null) {
    return true;
  }

  return false;
}

export default vacanciesController;

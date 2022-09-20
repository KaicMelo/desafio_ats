import { Request, Response } from "express";
import SubscribersListModel from "../models/subscribersListModel";

const subscribersListModel = new SubscribersListModel();

class SubscribersListController {
  async index(req: Request, res: Response) {
    const subscription = await subscribersListModel.index();
    
    if (!subscription) {
      return res.status(400).json({ message: "subscrição não encontradas" });
    }

    return res.json(subscription).status(200);
  }
  async candidateAndVacancyJoin(req: Request, res: Response) {
    const subscription = await subscribersListModel.indexCandidateAndVacancyJoin();
    
    if (!subscription) {
      return res.status(400).json({ message: "subscrição não encontradas" });
    }

    return res.json(subscription).status(200);
  }
  async store(req: Request, res: Response) {
    const subscription: any = req.body;

    const erros = noEmpty(subscription);

    if (erros) {
      return res.status(401).json("Erro no corpo da requisição");
    }

    const response = await subscribersListModel.store(subscription);

    if (!response) {
      return res.status(400).json("Candidato não encontrado");
    }

    return res.status(201).json(response);
  }
  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const response = await subscribersListModel.destroy(id);

    if (!response) {
      return res.status(400).json("Erro ao deletar registro");
    }

    return res.json("Deletado com sucesso").status(200);
  }
}

function noEmpty(subscription: any) {
  if (typeof subscription.vacancy_id === undefined && typeof subscription.candidate_id === undefined) {
    return true;
  }

  if (typeof subscription.vacancy_id === null && typeof subscription.candidate_id === undefined) {
    return true;
  }

  return false;
}

export default SubscribersListController;

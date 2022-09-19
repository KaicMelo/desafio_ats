import { Request, Response } from "express";
import CandidateModel from "../models/candidateModel";

const candidateModel = new CandidateModel();

class candidateController {
  async index(req: Request, res: Response) {
    const candidates = await candidateModel.index();

    if (!candidates) {
      return res.status(400).json({ message: "Candidato não encontrado" });
    }

    return res.json(candidates);
  }
  async store(req: Request, res: Response) {
    const candidates: any = req.body;

    const erros = noEmpty(candidates);

    if (erros) {
      return res.status(401).json("Erro no corpo da requisição");
    }

    const response = await candidateModel.store(candidates);

    if (!response) {
      return res.status(400).json("Candidato não encontrado");
    }

    return res.status(201).json(response);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;

        const candidates = req.body;

        const erros = noEmpty(candidates);

        if (erros) {
            return res.status(401).json("Erro no corpo da requisição");
        }

        const response = await candidateModel.update(id, candidates);

        if (!response) {
            return res.status(400).json("Erro ao atualizar registro");
        }

        return res.json(response).status(200);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const response = await candidateModel.destroy(id);

    if (!response) {
      return res.status(400).json("Erro ao deletar registro");
    }

    return res.json("Deletado com sucesso").status(200);
  }
}

function noEmpty(candidates: any) {
  if (candidates.candidate.trim() === '') {
    return true;
  }

  if (typeof candidates.candidate === undefined) {
    return true;
  }

  if (typeof candidates.candidate === null) {
    return true;
  }

  return false;
}

export default candidateController;

import { Request, Response } from "express";
import ResumesModel from "../models/resumesModel";
import CandidateModel from "../models/candidateModel";

const resumesModel = new ResumesModel();
const candidateModel = new CandidateModel();

class resumeController {
  async indexWithResume(req: Request, res: Response) {
    const resume = await candidateModel.indexWithResume();

    if (!resume) {
      return res.status(400).json({ message: "Currisulo não encontrado" });
    }

    return res.status(200).json(resume);
  }
  async store(req: Request, res: Response) {
    const resume: any = req.body;

    if (!resume) {
      return res.status(401).json("Erro no corpo da requisição");
    }

    const response = await resumesModel.store(resume);

    if (!response) {
      return res.status(400).json("Candidato não encontrado");
    }

    return res.status(201).json(response);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;

    const resume = req.body;
    
    if (!resume) {
      return res.status(401).json("Erro no corpo da requisição");
    }

    const response = await resumesModel.update(id, resume);

    if (!response) {
      return res.status(400).json("Erro ao atualizar registro");
    }

    return res.json(response).status(200);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const response = await resumesModel.destroy(id);

    if (!response) {
      return res.status(400).json("Erro ao deletar registro");
    }

    return res.json("Deletado com sucesso").status(200);
  }
}

export default resumeController;

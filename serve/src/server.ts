import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}))

import CandidateController from './controllers/candidateController';
import VacanciesController from './controllers/vacanciesController';
import SubscribersListController from './controllers/subscribersListController';
import ResumeController from './controllers/resumeController';
import ServerLogController from './controllers/ServerLogController';

const candidateController = new CandidateController();
const vacanciesController = new VacanciesController();
const subscribersListController = new SubscribersListController();
const resumeController = new ResumeController();
const serverLogController = new ServerLogController();


app.get('/candidates', candidateController.index);
app.post('/candidates', candidateController.store);
app.put('/candidates/:id', candidateController.update);
app.delete('/candidates/:id', candidateController.destroy);

app.get('/vacancies', vacanciesController.index);
app.post('/vacancies', vacanciesController.store);
app.put('/vacancies/:id', vacanciesController.update);
app.delete('/vacancies/:id', vacanciesController.destroy);

app.get('/list_candidates', subscribersListController.index);
app.get('/list_candidates/list_names', subscribersListController.candidateAndVacancyJoin);
app.post('/list_candidates', subscribersListController.store);
app.delete('/list_candidates/:id', subscribersListController.destroy);

app.get("/resume", resumeController.indexWithResume);
app.post("/resume", resumeController.store);
app.put("/resume/:id", resumeController.update);
app.delete("/resume/:id", resumeController.destroy);

app.get('/log', serverLogController.index);
app.post('/log', serverLogController.store);

app.listen(process.env.SERVE_PORT)
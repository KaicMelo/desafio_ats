import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}))

import CandidateController from './controllers/candidateController';
import VacanciesController from './controllers/vacanciesController';
import SubscribersListController from './controllers/SubscribersListController';

const candidateController = new CandidateController();
const vacanciesController = new VacanciesController();
const subscribersListController = new SubscribersListController();


app.get('/candidatos', candidateController.index);
app.post('/candidatos', candidateController.store);
app.put('/candidatos/:id', candidateController.update);
app.delete('/candidatos/:id', candidateController.destroy);

app.get('/vagas', vacanciesController.index);
app.post('/vagas', vacanciesController.store);
app.put('/vagas/:id', vacanciesController.update);
app.delete('/vagas/:id', vacanciesController.destroy);

app.get('/lista_candidatados', subscribersListController.index);
app.post('/lista_candidatados', subscribersListController.store);
app.delete('/lista_candidatados/:id', subscribersListController.destroy);


app.listen(3333)
// app.listen(process.env.SERVE_PORT)
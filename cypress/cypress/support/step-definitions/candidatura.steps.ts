import { Candidatura } from "../page-objects/candidatura-page.po";
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

const candidatura = new Candidatura();
let nomeCandidato = "";
let nomeVaga = "";

before(() => {
  cy.fixture("db").then((candidatos) => {
    nomeCandidato = candidatos.nome;
    nomeVaga = candidatos.nomeVaga;
  });
});

Then("devo visualizar o card da candidatura", () => {
  candidatura.listarCardCandidatura(nomeCandidato, nomeVaga);
});
Then("não devo visualizar o card da candidatura", () => {
  candidatura.naoListarCardCandidatura(nomeCandidato, nomeVaga);
});

import { ListaCandidatos } from "../page-objects/listaCandidatos-page.po";
import { Then, And } from "cypress-cucumber-preprocessor/steps";

const listaCandidatos = new ListaCandidatos();
let nomeCandidato = "";
let nomeVaga = "";

before(() => {
  cy.fixture("db").then((candidatos) => {
    nomeCandidato = candidatos.nome;
    nomeVaga = candidatos.nomeVaga;
  });
});

And("seleciono candidato", function () {
  listaCandidatos.selecionoCandidato(nomeCandidato);
});
And("seleciono vaga e me candidato", function () {
  listaCandidatos.selecionoVaga(nomeVaga);
});
Then("devo visualizar mensagem de candidatado cadastrado com sucesso", function () {
  listaCandidatos.mensagemCandidatoCandidatadoSucesso();
});
Then("devo visualizar mensagem de candidatado já cadastrado", function () {
  listaCandidatos.mensagemCandidatoJaCandidatado();
});

And("deleto candidato cadandidatado", function () {
  listaCandidatos.DeletarCandidatoCandidatado(nomeCandidato,nomeVaga);
});
And("confirmo deletar candidatura", function () {
  listaCandidatos.confirmarDeletarCandidatura();
});

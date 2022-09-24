import { Generic } from './../page-objects/generic-page.po';
import { ListaCandidatos } from "../page-objects/listaCandidatos-page.po";
import { Then, And } from "cypress-cucumber-preprocessor/steps";

const generic = new Generic();
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
  generic.mensagemDeSucesso('Salvo com sucesso');
});
Then("devo visualizar mensagem de candidatado já cadastrado", function () {
  generic.mensagemDeAlerta('Usuário já se cadastrou para essa vaga');
});

And("deleto candidato cadandidatado", function () {
  listaCandidatos.DeletarCandidatoCandidatado(nomeCandidato,nomeVaga);
});
And("confirmo deletar candidatura", function () {
  generic.confirmarDeletar();
  generic.mensagemDeSucesso("Deletado");
});

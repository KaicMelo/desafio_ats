import { Curriculo } from "../page-objects/curriculo-page.po";
import { Then, And } from "cypress-cucumber-preprocessor/steps";

const curriculo = new Curriculo();
let nomeCandidato = "";
let nomeAlternativo = "";

before(() => {
  cy.fixture("db").then((candidatos) => {
    nomeCandidato = candidatos.nome;
    nomeAlternativo = candidatos.nome_alternativo;
  });
});

And("clico em criar novo curriculo", function () {
  curriculo.clicarEmCriarCurriculo(nomeCandidato);
});
And("preencho o nome do curriculo e salvo", function () {
  curriculo.preencherCurriculoSalvar();
});
Then("devo visualizar mensagem de curriculo cadastrado com sucesso", function () {
  curriculo.mensagemCurriculoCadastradoComSucesso();
});

And("clico em visualizar curriculo", function () {
  curriculo.cliqueVisualizarCurriculo(nomeCandidato);
});
Then("devo visualizar mensagem que não tenho curriculo cadastrado", function () {
  curriculo.mensagemCurriculoNaoCadastrado();
});
Then("devo visualizar mensagem que não tenho curriculo cadastrado para deletar", function () {
  curriculo.mensagemCurriculoNaoCadastradoParaDeletar();
});

And("clico em deletar curriculo", function () {
  curriculo.cliqueDeletarCurriculo(nomeCandidato);
});

Then("devo visualizar na tabela que não contem curriculo", function () {
  curriculo.candidatoNaoContemCurriculoCadastrado(nomeCandidato);
});
Then("devo visualizar na tabela que contem curriculo", function () {
  curriculo.candidatoContemCurriculoCadastrado(nomeCandidato);
});

And("altero o curriculo e salvo", function () {
  curriculo.alterarCurriculoSalvar(nomeAlternativo);
});

And("confirmo deletar curriculo", function () {
  curriculo.confirmarDeletarCurriculo();
});

Then("devo visualizar mensagem de curriculo deletado com sucesso", function () {
  curriculo.mensagemCurriculoDeletadoSucesso();
});
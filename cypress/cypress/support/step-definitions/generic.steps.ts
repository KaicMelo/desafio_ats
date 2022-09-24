/// <reference types="Cypress" />

import { Generic } from "../page-objects/generic-page.po";
import { When,Then} from "cypress-cucumber-preprocessor/steps";

const generic = new Generic();

When("acesso o modulo {string}", (rotas: string) => {
  generic.acessarDesafioAts(rotas);
});

Then("devo visualizar mensagem para preencher o campo corretamente", function () {
  generic.mensagemPreenchaCampoCorretamente();
  });
Then("devo visualizar mensagem de deletado com sucesso", function () {
  generic.mensagemDeletadoComSucesso();
  });
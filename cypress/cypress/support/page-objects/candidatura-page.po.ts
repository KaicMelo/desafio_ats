/// <reference types="Cypress" />

export class Candidatura {
  timeOut: number = 3000;

  listarCardCandidatura(nomeCandidato: string,nomeVaga: string){
    const card = `#${nomeCandidato}-${nomeVaga}`.replace(/ /g, "");
    cy.get(card).contains(nomeCandidato).should("be.visible");
  }

  naoListarCardCandidatura(nomeCandidato: string,nomeVaga: string){
    const card = `#${nomeCandidato}-${nomeVaga}`.replace(/ /g, "");
    cy.get(card).should("not.exist");
  }
}

import { Vagas } from './../vagas/interfaces/vagas.interface';
import { Candidato } from './../candidato/interfaces/candidato.interface';
import { CandidatoService } from './../candidato/services/candidato.service';
import { VagasService } from './../vagas/services/vagas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css'],
})
export class ListaCandidatosComponent implements OnInit {
  public listaDeVagas$ = this.vagasService.listaVagas();
  public listaDeCandidatos$ = this.candidatoService.listaCandidatos();

  listaDeCandidatos: any[] = [];
  listaDeVagas: any[] = [];

  vagaTitulo: string = 'Selecione a vaga';
  candidatoTitulo: string = 'Selecione o Candidato';
  salvarCandidato: string = 'Candidatar';

  candidatoValor:any;
  vagasValor:any;
  
  constructor(
    private vagasService: VagasService,
    private candidatoService: CandidatoService
  ) {}

  ngOnInit(): void {
    this.vagasService.listaVagas().subscribe((vagas) => {
      vagas.map((vaga: Vagas) => {
        this.listaDeVagas.push({ label: vaga.vaga, value: vaga.id });
      });
    });
    this.candidatoService.listaCandidatos().subscribe((vagas) => {
      vagas.map((candidato: Candidato) => {
        this.listaDeCandidatos.push({
          label: candidato.candidato,
          value: candidato.id,
        });
      });
    });
  }

  onClick() {
    console.log(this.vagasValor,this.candidatoValor)
  }
  obterVagasValor(event:any){
    this.vagasValor = event
  }

  obterCandidatoValor(event:any){
    this.candidatoValor = event
  }
}

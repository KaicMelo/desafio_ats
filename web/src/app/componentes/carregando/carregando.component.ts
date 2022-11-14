import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carregando',
  templateUrl: './carregando.component.html',
  styleUrls: ['./carregando.component.css']
})
export class CarregandoComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();
  
  constructor() { }

  ngOnInit(): void {
  }

}

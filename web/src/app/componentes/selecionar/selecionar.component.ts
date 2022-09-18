import { empty } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selecionar',
  templateUrl: './selecionar.component.html',
  styleUrls: ['./selecionar.component.css']
})
export class SelecionarComponent implements OnInit {
  @Input() vagas: any;
  @Input() label: string = '';
  @Output() valorFormulario:any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onChange(event: any){
    this.valorFormulario.emit(event);
  }
}

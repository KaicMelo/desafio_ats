import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();
  
  constructor() { }

  ngOnInit(): void {
  }

}

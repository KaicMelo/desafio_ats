import { LoadingModule } from '../../components/loading/loading.module';
import { HttpClientModule } from '@angular/common/http';
import { ResumeModalModule } from './resume-modal/resume-modal.module';
import { PoTableModule, PoNotificationModule, PoDividerModule } from '@po-ui/ng-components';
import { ResumeRoutingModule } from './resume-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    PoTableModule,
    LoadingModule,
    ResumeModalModule,
    HttpClientModule,
    PoDividerModule,
    PoNotificationModule
  ]
})
export class ResumeModule { }

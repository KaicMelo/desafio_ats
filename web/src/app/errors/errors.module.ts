import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as StackTrace from 'stacktrace-js';
import { ServerLogService } from './server-log.server';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    // const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);

    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const message = error.message ? error.message : error.toString();

    StackTrace.get()
      .then((stackFrames) => {
        const callback = stackFrames.map((sf) => sf.toString()).join('\n');
        
        serverLogService
        .log({
          message,
          url,
          stack: callback,
        })
        .subscribe(
          () => {
            console.log('Error logged on server')
            router.navigate(['/error']);
          },
          (err) => {
            console.log(err);
            console.log('Fail to send error log to server');
          }
        );
      })
      .catch((errback) => {
        console.log('teste get errback');
        console.log(errback);
      });
  }
}
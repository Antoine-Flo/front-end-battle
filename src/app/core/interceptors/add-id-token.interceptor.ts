import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import app from 'firebase';
import { first, mergeMap, take, tap } from 'rxjs/operators';

@Injectable()
export class AddIdTokenInterceptor implements HttpInterceptor {
  userTokenId: string;

  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

  return  this.authService.getIdToken().pipe(
      first(),
      mergeMap(x => {
        const clonedRequest = request.clone({ headers: request.headers.append('Authorization', x), });
        return next.handle(clonedRequest);
      })
    )

    // Code and explanation found here : https://stackoverflow.com/questions/34464108/angular-set-headers-for-every-request

    // const clonedRequest = request.clone({
    //   headers: request.headers.append('Authorization', this.userTokenId),
    // });

    // return next.handle(clonedRequest);
    
  }
}

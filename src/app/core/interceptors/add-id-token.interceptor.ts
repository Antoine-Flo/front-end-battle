import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class AddIdTokenInterceptor implements HttpInterceptor {
  userTokenId: string;

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // this.authService.getIdToken().then(id => this.userTokenId = id)

    // Code and explanation found here : https://stackoverflow.com/questions/34464108/angular-set-headers-for-every-request

    const clonedRequest = request.clone({ headers: request.headers.append('Authorization', 'demo') });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);

  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private LoaderService :LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.LoaderService.setLoaderState(true);
    const UpdateRequest = request.clone({
      headers:request.headers.append('Accept-Language','en')
    })
    console.log('interceptor',UpdateRequest)
    return next.handle(UpdateRequest).pipe(finalize(()=>{this.LoaderService.setLoaderState(false);})); 
  }
}

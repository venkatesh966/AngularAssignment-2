import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import{Icomment} from './comment';
import { HttpClient } from '@angular/common/http/src/client';
import { Observable } from 'rxjs/Observable';


export class CommentInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<Icomment>, next: HttpHandler){
        const newRequest = req.clone({
            headers: req.headers.set('Authorization','admin')
        });
        console.log(newRequest);
       return next
       .handle(newRequest)
       .do(
          succ=>console.log(succ),
          err=>{
              if(err.status===401){
                  console.error('you are not Authenticated');
              }
          } 
       )
    }
 }
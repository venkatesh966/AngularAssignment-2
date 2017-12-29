import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Icomment } from './comment';

@Injectable()
export class CommentService {
    constructor(private http: HttpClient){
    }
    commentFunction(start,limit){
        const url = 'https://jsonplaceholder.typicode.com/comments/?_start='+start+'&'+'_limit='+limit;
        return this.http.get<Icomment[]>(url);
    }
}
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Itodos } from './todos';


@Injectable()
export class todosService {
    constructor(private http: HttpClient){
    }
    commentFunction(start,limit){
        const url = 'https://jsonplaceholder.typicode.com/todos/?_start='+start+'&'+'_limit='+limit;
        return this.http.get<Itodos[]>(url);
    }
}

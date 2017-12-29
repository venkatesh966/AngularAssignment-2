import { Component, OnInit } from '@angular/core';
import { Itodos } from './todos';
import { todosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit { 

  start : number;
  limit : number;
  todosList: Itodos[];

  constructor(private _todoService: todosService) { 
    this.start = 0;
    this.limit = 10;
  }

  updateLimit(val){
    this.start=0;
    this.limit=val;
    this.display();
  }

  display(){
    this._todoService.commentFunction(this.start, this.limit).subscribe((res:Itodos[]) =>{
      this.todosList = res;
    });
   }

  ngOnInit() {
this.display();
  }
}

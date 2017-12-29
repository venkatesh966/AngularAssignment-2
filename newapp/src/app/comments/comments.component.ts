import { Component, OnInit } from '@angular/core';
import { Icomment } from './comment';
import { CommentService } from './comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  start : number;
  limit : number;
  commentList: Icomment[];

  constructor(private _commentService: CommentService) {  
    this.start = 0;
   this.limit = 10;
  }

  updateLimit(val1,val){
    this.start=val1;
    this.limit=val;
    this.display();
  }

  display(){
    this._commentService.commentFunction(this.start, this.limit).subscribe((res:Icomment[]) =>{
      this.commentList = res;
    });
   }
  ngOnInit() {
   this.display();
    
}
}

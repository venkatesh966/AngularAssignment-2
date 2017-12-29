import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,RouterLink} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';


import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ImageService } from './albumservice.service';
//import { UsersComponent } from './users/users.component';
//import { UserserviceService } from './userservice.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './comments/comment.service';
import { TodosComponent } from './todos/todos.component';
import { todosService } from './todos/todos.service';
import { CommentInterceptor } from './comments/commentinterceptor';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginService } from './login/loginservices/login.service';







@NgModule({
  declarations: [
    AppComponent , AlbumComponent, CommentsComponent, TodosComponent, LoginComponent, UserComponent, WelcomeComponent 
  ],
  imports: [
    BrowserModule,HttpClientModule,Ng2PaginationModule,FormsModule,RouterModule.forRoot([
    
      {path: 'album', component: AlbumComponent},

      {path: 'welcome', component:WelcomeComponent},
      
      {path: 'login' , component:LoginComponent},
      
     {path:'todos',component:TodosComponent},

      {path:'comments',component:CommentsComponent},
     
      {path:'**',component:LoginComponent},        
       
      
    ])
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CommentInterceptor,multi:true},ImageService,CommentService,todosService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

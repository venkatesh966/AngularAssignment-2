import { Component, OnInit } from '@angular/core';
import { ImageService } from '../albumservice.service';
import { IAlbum } from './album';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  start : number;
  limit : number;
  imageList: IAlbum[];
  currenturl : string;


  constructor(private _imageService: ImageService) {  
    this.start = 0;
    this.limit = 10;
  }
  updateLimit(val){
    this.start=0;
    this.limit=val;
    this.display();
  }
  currentImage(currenturl){
    this.currenturl=currenturl;
  }
  display(){
    this._imageService.getImages(this.start, this.limit).subscribe((res:IAlbum[]) =>{
      this.imageList = res;
    });
   }

  ngOnInit() {
    this.display(); 
  }
 
}


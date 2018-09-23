import { Component, OnInit } from '@angular/core';
import { FaceApiService } from '../../services/face-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  imgUrl: String;

  datos: String;

  constructor( private data: FaceApiService ) {
    this.imgUrl = '';
  }

  getUrl(imgUrl) {

    console.log(imgUrl);

    this.data.getApiData(imgUrl).subscribe( data => {
      this.datos = data;
    });
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FaceListService } from '../../services/face-list.service';
import { FaceAddService } from '../../services/face-add.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  constructor( public _crudService: CrudService, public _faceListService: FaceListService,
    public _faceAddService: FaceAddService ) { }

  put() {
    this._faceListService.createFaceList();
  }

  addFace() {
    this._faceAddService.httpPost();
  }

  ngOnInit() {
  }

}

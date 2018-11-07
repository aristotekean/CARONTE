import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FaceListService } from '../../services/face-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  constructor( public _crudService: CrudService, public _faceListService: FaceListService ) { }

  put() {
    this._faceListService.createFaceList();
  }

  ngOnInit() {
  }

}

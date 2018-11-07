import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FaceListService } from '../../services/face-list.service';
import { FaceAddService } from '../../services/face-add.service';
import { FindSimilarService } from '../../services/find-similar.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public users = [];

  constructor( public _crudService: CrudService, public _faceListService: FaceListService,
      public _findSimilarService: FindSimilarService  ) { }

  findSimilar() {
    this._findSimilarService.httpPost();
  }

  ngOnInit() {}

}

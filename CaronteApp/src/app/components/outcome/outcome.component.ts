import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FindSimilarService } from 'src/app/services/find-similar.service';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {

  see: boolean = false;

  constructor( private _crudService: CrudService,
    public _findSimilarService: FindSimilarService ) { }


  ngOnInit() {
  }

}

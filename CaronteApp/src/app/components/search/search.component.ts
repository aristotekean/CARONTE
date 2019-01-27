import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  seeOutcome = false;

  displayCounter(count) {
    this.seeOutcome = count;
  }
  constructor( public _crudService: CrudService ) { }

  ngOnInit() {}

}

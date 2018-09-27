import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users = [];

  constructor( public _crudService: CrudService ) { }

  ngOnInit() {

    this._crudService.getUsers().subscribe( ( usersSnapshot ) => {
        this.users = [];
        usersSnapshot.forEach( ( usersData: any ) => {
          this.users.push({
            id: usersData.payload.doc.id,
            data: usersData.payload.doc.data()
          });
        });
      });

  }

}

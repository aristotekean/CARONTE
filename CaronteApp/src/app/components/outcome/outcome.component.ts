import {
  Observable
} from 'rxjs';
import {
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  CrudService
} from 'src/app/services/crud.service';
import {
  FindSimilarService
} from 'src/app/services/find-similar.service';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {

  usersColletion: AngularFirestoreCollection < any > ;
  users: Observable < any > ;

  values: any = [];

  persistedFaceId: any;

  constructor(private _crudService: CrudService,
    public _findSimilarService: FindSimilarService) {}

  ngOnInit() {

    setTimeout(() => {

      this.persistedFaceId = this._findSimilarService.persistedFaceIds;

      console.warn(this.persistedFaceId);

      this.persistedFaceId.forEach(element => {
        console.error(element.confidence);
        this.usersColletion = this._crudService.afs.collection('users', ref => {
          return ref.where('persistedFaceId.persistedFaceId', '==', element.persistedFaceId);
        });
        this.users = this.usersColletion.valueChanges();
        this.users.subscribe(
          data => {
            console.log(data);
            if ( data.length === 1 ) {
              this.values.push(data);
            }
          }
        );
      });

    }, 1000);
  }

}

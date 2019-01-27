import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindSimilarService {

  private endpoint  = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/findsimilars';

  public persistedFaceIds = [];

  constructor( private _httpClient: HttpClient, public _crudService: CrudService ) { }

  httpPost( faceId ) {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', 'AZURE-SUBSCRIPTION-KEY');

    this._httpClient.post(this.endpoint,
      {
        'faceId': faceId,
        'faceListId': 'ucc',
        'maxNumOfCandidatesReturned': 5,
        'mode': 'matchPerson'
    }, {headers})
    .subscribe(
        (val) => {
            for (const key in val) {
              if (val.hasOwnProperty(key)) {
                const element = val[key];
                this.persistedFaceIds.push(element);
              }
            }
        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });

  }

}

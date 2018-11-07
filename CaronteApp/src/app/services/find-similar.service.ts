import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindSimilarService {

  private endpoint  = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/findsimilars';

  constructor( private _httpClient: HttpClient ) { }

  httpPost() {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', '75d50f59332f4867b2ac1af7d6e85d62');

    this._httpClient.post(this.endpoint,
      {
        'faceId': '0ea6e233-37ba-4893-8eb7-905368623ce6',
        'faceListId': 'ucc',
        'maxNumOfCandidatesReturned': 5,
        'mode': 'matchPerson'
    }, {headers})
    .subscribe(
        (val) => {
            console.log('POST call successful value returned in body',
                        val);
        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });

  }

}

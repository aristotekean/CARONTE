import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaceListService {

  private url = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/facelists/ucc';

  constructor( private _httpClient: HttpClient ) { }

  // TEMINADO Y FUNCIONANDO, si la respuesta es NULL fue exitosa.

  createFaceList() {

    const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Ocp-Apim-Subscription-Key', 'AZURE-SUBSCRIPTION-KEY');

  // const params = new HttpParams()
  // .set('_page', '1');

    this._httpClient.put(this.url,
      {
        'name': 'sample_list',
        'userData': 'User-provided data attached to the face list.'
    },
    {headers})
    .subscribe(
        val => {
            console.log('A successful call returns an empty response body.',
                        val);
        },
        response => {
            console.log('PUT call in error', response);
        },
        () => {
            console.log('The PUT observable is now completed.');
        }
    );

  }

}

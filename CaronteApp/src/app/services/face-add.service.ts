import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class FaceAddService {

  private endpoint  = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/facelists/ucc/persistedFaces';

  constructor( private _httpClient: HttpClient, public _crudService: CrudService ) { }

  httpPost( data: any) {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', 'AZURE-SUBSCRIPTION-KEY');

    this._httpClient.post(this.endpoint,
      {
        'url': data.url_foto
    }, {headers})
    .subscribe(
        (val) => { console.log('POST call successful value returned in body', val);

        data.persistedFaceId = val;

        this._crudService.createUser(data).then(() => {
          console.log('Guardado con exito'); },
          (error) => {
            console.log(error);  });

        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });

  }

}

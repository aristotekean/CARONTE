import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { FindSimilarService } from './find-similar.service';

@Injectable({
  providedIn: 'root'
})
export class FaceApiService {

  params = 'age,gender,headPose,smile,facialHair,glasses,emotion,' +
  'hair,makeup,occlusion,accessories,blur,exposure,noise';

  private url = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=' + this.params;

  constructor( private http: Http, public _findSimilarService: FindSimilarService ) { }

  getApiData( imgUrl: String ) {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'AZURE-SUBSCRIPTION-KEY'
    });

    const options = new RequestOptions({ headers });

    return this.http.post( this.url, { url: imgUrl }, options )
    .pipe( map( data => data.json() ),
    tap( result => {
      console.warn( 'Respuesta API', result );
      this._findSimilarService.httpPost( result[0].faceId );
    }) );
  }

}

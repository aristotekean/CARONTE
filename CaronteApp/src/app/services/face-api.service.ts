import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceApiService {

  private url = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender';

  constructor( private http: Http ) { }

  getApiData( imgUrl: String ) {

    console.log(imgUrl);

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '75d50f59332f4867b2ac1af7d6e85d62'
    });

    const options = new RequestOptions({ headers });

    return this.http.post( this.url, { url: imgUrl }, options )
    .pipe( map( data => data.json() ),
    tap( result => console.log( result ) ) );
  }

}

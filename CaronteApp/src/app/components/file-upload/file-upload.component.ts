import { Component, OnInit } from '@angular/core';
import { FaceApiService } from '../../services/face-api.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public imgUrl: String;

  public dataApi: any;

  // Main Task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Dowload URL
  public downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  // unsupported file
  unsupportedFile = '';

  constructor( private data: FaceApiService, private storage: AngularFireStorage,
    private db: AngularFirestore ) {}

  // Get URL for API
  sendUrl(imgUrl) {

      this.data.getApiData(imgUrl).subscribe( data => {
        this.dataApi = {
          'imgUrl': imgUrl,
          'dataApi': data
        };
      });
    }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      this.unsupportedFile = 'Archivo no soportado';
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `photos/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { Caronte: 'De Colombia con amor' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // Download URL file
    this.snapshot.pipe(finalize(() => {
      this.downloadURL = this.storage.ref(path).getDownloadURL();
      this.downloadURL.subscribe( url => {
        if (url) {
          this.sendUrl(url);
        }
      } );
    }) ).subscribe();

    // AFS
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {

          // Update firestore on completion
          this.db.collection('photos').add( {path, size: snap.totalBytes });
        }
      })
    );
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  ngOnInit() {}

}

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

  imgUrl: String;

  datos: String;

  // Tarea principal
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Dowload URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  // unsupported file
  unsupportedFile = '';

  constructor( private data: FaceApiService, private storage: AngularFireStorage, private db: AngularFirestore  ) {
    this.imgUrl = '';
  }

  // Obtener URL
  getUrl(imgUrl) {
    this.data.getApiData(imgUrl).subscribe( data => {
      this.datos = data;
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
    const customMetadata = { Caronte: 'Hecho con amor' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // The file's download URL
    this.snapshot.pipe(finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL()),
    tap(data => console.log(data))).subscribe();

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

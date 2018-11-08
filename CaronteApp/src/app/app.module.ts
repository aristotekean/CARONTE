import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router
import { AppRoutingModule } from './app-routing/app-routing.module';

// FireStore
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

// Services
import { CrudService } from './services/crud.service';
import { FaceApiService } from './services/face-api.service';
import { FaceListService } from './services/face-list.service';
import { FaceAddService } from './services/face-add.service';

// Directives
import { DropZoneDirective } from './directives/drop-zone.directive';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { CardComponent } from './components/card/card.component';
import { OutcomeComponent } from './components/outcome/outcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    RegisterComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe,
    CardComponent,
    OutcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    CrudService,
    FaceApiService,
    FaceListService,
    FaceAddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

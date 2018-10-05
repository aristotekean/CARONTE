import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Router
import { AppRoutingModule } from './app-routing/app-routing.module';

// FireStore
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Services
import { CrudService } from './services/crud.service';
import { FaceApiService } from './services/face-api.service';


// Componentes
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    RegisterComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CrudService,
    FaceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

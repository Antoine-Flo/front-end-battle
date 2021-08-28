import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AddIdTokenInterceptor } from './core/interceptors/add-id-token.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    CoreModule,
    AuthModule,
    ProfileModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: BUCKET, useValue: 'challenge-img' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddIdTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

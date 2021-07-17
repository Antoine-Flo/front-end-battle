import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { GameModule } from './modules/game/game.module';
import { HomeModule } from './modules/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GameModule,
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

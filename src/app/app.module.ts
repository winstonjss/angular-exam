import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/componentes/navbar/navbar.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { HomeComponent } from './components/componentes/home/home.component';
import { MessiComponent } from './components/componentes/messi/messi.component';
import { JamesComponent } from './components/componentes/james/james.component';
import { RonaldoComponent } from './components/componentes/ronaldo/ronaldo.component';

import { APP_ROUTING } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MessiComponent,
    JamesComponent,
    RonaldoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

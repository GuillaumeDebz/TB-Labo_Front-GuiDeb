import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// APP ROUTE - APP COMPO //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ADMIN //
import { UsersComponent } from './admin/users/users.component';


// COMPO //
import { Four0FourComponent } from './TechnoCoop/four0four/four0four.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListeCooperativesComponent } from './TechnoCoop/liste-cooperatives/liste-cooperatives.component';
import { ListeEventsComponent } from './TechnoCoop/liste-events/liste-events.component';
import { ContactComponent } from './TechnoCoop/contact/contact.component';
import { InscriptionComponent } from './TechnoCoop/inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    Four0FourComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListeCooperativesComponent,
    ListeEventsComponent,
    ContactComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

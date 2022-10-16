import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


// APP ROUTE - APP COMPO //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ADMIN //
import { UsersComponent } from './admin/users/users.component';

// Material //
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';



// COMPO //
import { Four0FourComponent } from './TechnoCoop/four0four/four0four.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListeCooperativesComponent } from './TechnoCoop/liste-cooperatives/liste-cooperatives.component';
import { ListeEventsComponent } from './TechnoCoop/liste-events/liste-events.component';
import { ContactComponent } from './TechnoCoop/contact/contact.component';
import { InscriptionComponent } from './TechnoCoop/inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

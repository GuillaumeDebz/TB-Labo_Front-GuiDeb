import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Page 404 //
import { Four0FourComponent } from './TechnoCoop/four0four/four0four.component';

// Home //
import { HomeComponent } from './home/home.component';

// Inscription //
import { InscriptionComponent } from './TechnoCoop/inscription/inscription.component';

// Liste des évènements //
import { ListeEventsComponent } from './TechnoCoop/liste-events/liste-events.component';

// Liste des coopératives //
import { ListeCooperativesComponent } from './TechnoCoop/liste-cooperatives/liste-cooperatives.component';

// Contact
import { ContactComponent } from './TechnoCoop/contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

	{ path: "compo", children: [
		{ path: "events", component: ListeEventsComponent },
		{ path: "listecooperatives", component: ListeCooperativesComponent },
		{ path: "inscription", component: InscriptionComponent },

    { path: "contact", component: ContactComponent }
  ]},




  { path: "**", component: Four0FourComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

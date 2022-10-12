import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Page 404 //
import { Four0FourComponent } from './TechnoCoop/four0four/four0four.component';

// Home, NavBar & Footer //
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';


const routes: Routes = [
  { path: "", component: HomeComponent },











  { path: "**", component: Four0FourComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

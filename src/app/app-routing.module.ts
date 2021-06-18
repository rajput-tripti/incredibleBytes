import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { HomeComponent } from './home/home.component';
import { NgoListComponent } from './ngo-list/ngo-list.component';
import { PostFoodComponent } from './post-food/post-food.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  { path : "", redirectTo: "/home", pathMatch: "full"},
  { path : "home", component : HomeComponent},
  { path : "ngo-list", component : NgoListComponent},
  { path : "restaurants", component : RestaurantListComponent},
  { path : "post-food", component : PostFoodComponent},
  { path : "fundraisers", component : FundraisersComponent},
  { path : "about-us", component : AboutUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

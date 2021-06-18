import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterModalComponent } from './registermodal/registermodal.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HomeComponent } from './home/home.component';
import { NgoListComponent } from './ngo-list/ngo-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { PostFoodComponent } from './post-food/post-food.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterModalComponent,
    RestaurantListComponent,
    LoginModalComponent,
    HomeComponent,
    NgoListComponent,
    PostFoodComponent,
    AboutUsComponent,
    FundraisersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    MatDividerModule,
    MatFormFieldModule,
],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

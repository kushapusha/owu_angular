import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationHouseComponent } from './components/houses/registration-house/registration-house.component';
import { ShowAllHousesComponent } from './components/houses/show-all-houses/show-all-houses.component';
import { SearchHousesComponent } from './components/houses/search-houses/search-houses.component';
import { ConvertPipePipe } from './pipes/convert-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    RegistrationHouseComponent,
    ShowAllHousesComponent,
    SearchHousesComponent,
    ConvertPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

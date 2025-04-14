import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';





@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    BlankLayoutComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    FormsModule,  
    
  ],
  providers: [  provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

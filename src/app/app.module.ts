import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorityComponent } from './authority/authority.component';
import { ServiesProvideComponent } from './servies-provide/servies-provide.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CtnFeesDetailComponent } from './ctn-fees-detail/ctn-fees-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AuthorityComponent,
    ServiesProvideComponent,
    ContactDetailsComponent,
    CtnFeesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

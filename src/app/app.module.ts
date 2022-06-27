import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MessageComponent } from './shared/components/message/message.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { NgbDropdownModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PersonCardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

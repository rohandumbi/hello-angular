import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroListComponent } from './components/hero-list.component';
import { HeroesComponent } from './components/heroes.component';
import { DashboardComponent } from './components/dashboard.component'
import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

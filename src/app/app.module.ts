import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importar modulos
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
// importar componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,

    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

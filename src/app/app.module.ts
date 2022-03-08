import { OpModule } from './op/op.module';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './Contador/contador.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ContadorComponent,],
  imports: [BrowserModule, HeroesModule, OpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

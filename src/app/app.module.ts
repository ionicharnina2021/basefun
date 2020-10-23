import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TerceroComponent } from './tercero/tercero.component';
import { CosicaModule } from './cosica/cosica.module';
import { RedefineModule } from './redefine/redefine.module';

@NgModule({
  declarations: [
    AppComponent,
    TerceroComponent
  ],
  imports: [
    BrowserModule,
    CosicaModule,
    RedefineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

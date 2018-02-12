import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { AppReducer } from '../redux/app.reducer';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './core/shell/pages/pages.component';
import {
  TranslateLoader,
  TranslateStaticLoader,
  TranslateModule
} from 'ng2-translate';
import { Http } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from '../redux/usuario/usuario.effects';
import { SelectedEffects } from '../redux/Usuarios/selected/selected.effects';
import { UsuariosEffects } from '../redux/Usuarios/usuarios.effects';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    NgbModule,
    StoreModule.forRoot(AppReducer),
    // Note that you must instrument after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: tralationFactory,
      deps: [Http]
    }),
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([
      ProfileEffects,
      SelectedEffects,
      UsuariosEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  bootstrap: [PagesComponent],
  declarations: []
})
export class AppModule {}

export function tralationFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

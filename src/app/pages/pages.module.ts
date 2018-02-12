import { MySharedModule } from './../shared/myshared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { PromesasModule } from './promesas/promesas.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HospitalesModule } from './hospitales/hospitales.module';
import { MedicosModule } from './medicos/medicos.module';

@NgModule({
  imports: [
    CommonModule,
    AccountSettingsModule,
    MySharedModule,
    PromesasModule,
    RxjsModule,
    ProfileModule,
    UsuariosModule,
    HospitalesModule,
    MedicosModule

  ],
  declarations: []
})
export class PagesModule {}

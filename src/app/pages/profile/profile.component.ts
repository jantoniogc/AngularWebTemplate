import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormToolsService } from '../../shared/form-tools.service';
import { RequestUpdateUserAction, UpdateUsuarioAction } from '../../../redux/usuario/usuario.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UsuarioService, FormToolsService]
})
export class ProfileComponent implements OnInit {

  public usuario: Usuario;
  public form: FormGroup;
  public imagenSubir: File;
  public imagenTemp: File;


  constructor(
    private translate: TranslateService,
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private formTools: FormToolsService,
    private store: Store<AppState>
  ) {
    translate.setDefaultLang('es');
    this.usuario = this._usuarioService.usuario;
    this.store.select('usuario').subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.form = this.formBuilder.group({
      name: [
        this.usuario.nombre,
        [Validators.required]
      ],
      email: [
        this.usuario.email,
        [Validators.required]
      ]
    });
    this.formTools.formGroupValue(this.form);
  }

  onSubmit() {
    this.usuario = {
      nombre: this.form.value.name,
      email: this.form.value.email,
      password: ':)',
      _id: this.usuario._id,
      role: this.usuario.role,
      google: this.usuario.google,
      img: this.usuario.img
    };
    const action = new RequestUpdateUserAction(this.usuario);
    this.store.dispatch(action);
    // this._usuarioService.actualizarUsuario(this.usuario).subscribe();
  }


  seleccionImagen(event) {
    let fileList: File[] = [];
    if (!event) {
      this.imagenSubir
      return;
    }
    fileList = event.target.files;
    if (fileList.length > 1) {
      console.log('Sólo puede subir una imagen');
      return;
    }
    if (fileList[0].type.indexOf('image') < 0){
      swal('Sólo imágenes', 'El archivo selecionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = fileList[0];
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(fileList[0]);

    reader.onloadend = () => {
      this.imagenTemp = reader.result;
    }
  }

  cambiarImagen() {
    this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id)
    .then((resp: any) => {
      this.usuario.img = resp.usuario.img;
      const action = new UpdateUsuarioAction(this.usuario);
      this.store.dispatch(action);
      swal('Imagen Actualizada', this.usuario.nombre, 'success');
    })
    .catch(resp => {

    })
  }
}

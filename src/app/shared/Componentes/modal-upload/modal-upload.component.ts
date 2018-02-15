import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { FormGroup } from '@angular/forms';
import { SubirArchivoService } from '../../../services/subir-archivo/subir-archivo.service';
import { AppState } from '../../../../redux/app.state';
import { Store } from '@ngrx/store';
import { ModalUploadService } from '../modal-upload.service';
import { UpdateUsuarioAction } from '../../../../redux/Usuarios/usuarios.actions';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss'],
  providers:[SubirArchivoService]
})
export class ModalUploadComponent implements OnInit {

  public oculto: string = 'oculto';


  public usuario: Usuario;
  public imagenSubir: File;
  public imagenTemp: File;
  public tipoArchivo: string;
  public usuarioId; string;

  constructor(
    private _subirArchivoService: SubirArchivoService,
    private _modalUploadService: ModalUploadService,
    private _store: Store<AppState>
  ) {
    this._store.select('usuario')
      .subscribe(usuario => {
        this.usuario = usuario;
      });

    this._store.select('modalUpload')
    .subscribe((resp: any) => {
      this.oculto = resp.estado;
      this.tipoArchivo = resp.tipoArchivo;
      this.usuarioId = resp.usuarioId;
    })

  }

  ngOnInit() {
  }

  cerrarModal(){
    this.subirImagen = null;
    this.imagenTemp = null;
    this._modalUploadService.ocultarModal();
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
    if (fileList[0].type.indexOf('image') < 0) {
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

  subirImagen(){
    console.log(this.imagenSubir)
    this._subirArchivoService.subirArchivo(this.imagenSubir, this.tipoArchivo, this.usuarioId )
    .then ((resp: any) => {
      const action = new UpdateUsuarioAction(resp.usuario);
      this._store.dispatch(action);
      this._modalUploadService.ocultarModal();
    })
    .catch(error => {
      console.log('error en la carga...');
    })
  }
}

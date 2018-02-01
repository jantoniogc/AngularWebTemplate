import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { clearInterval } from 'timers';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  private suscriptions: Subscription;

  constructor() {

    this.suscriptions = this.retrunObservable()
      .subscribe(
        numero => console.log('Subs ' + numero),
        error => console.log('Error ' + error),
        () => console.log('El observador termino')
      );
  }

  ngOnInit() {
  }

  retrunObservable(): Observable<any> {
    return new Observable(observer => {
      let contador: number = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador
        };
        observer.next(salida);
      }, 400);
    }).map( (respuesta: any) => {
      return respuesta.valor;
    })
    .filter((valor, index) => {
      return ((valor % 2) === 1)? true : false;
    });
  }

  ngOnDestroy() {
    console.log('la página Rxjs se va a cerrar');
    this.suscriptions.unsubscribe();
  }

}

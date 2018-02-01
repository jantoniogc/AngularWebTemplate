import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { setInterval, clearInterval } from 'timers';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      (mensaje) => console.log('Termino', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let contador: number = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }
      }, 1000);

    });
  }


}

import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: FormControl;
  @Input() leyenda: string;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.progreso = new FormControl(10);
  }

  ngOnInit() {}

  cambiarValor(valor) {
    if (this.progreso.value >= 100 && valor > 0) {
      this.progreso.setValue(0);
      return;
    }
    if (this.progreso.value <= 0 && valor < 0) {
      this.progreso.setValue(0);
      return;
    }
    let _progreso: number = this.progreso.value;
    _progreso += valor;
    this.progreso.setValue(_progreso);
    this.cambioValor.emit(this.progreso.value);
  }

  onchange(newValue: number) {
    console.log(newValue);

  }
}

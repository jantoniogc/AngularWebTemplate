import { Component, OnInit } from '@angular/core';
import { CarService } from '../../shared/car.service';
import { Car } from '../Models/car';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [CarService]
})
export class CarsComponent implements OnInit {
  public displayDialog: boolean;
  public car: Car = new PrimeCar();
  public selectedCar: Car;
  public newCar: boolean;
  public cars: Car[];
  public cols: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    console.log('Estamos en carsComponent');
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    const cars = [...this.cars];
    if (this.newCar) {
      cars.push(this.car);
    } else {
      cars[this.findSelectedCarIndex()] = this.car;
    }
    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.findSelectedCarIndex();
    this.cars = this.cars.filter((val, i) => i !== index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    const car = new PrimeCar();
    for (const prop in c) {
      if (c.hasOwnProperty(prop)) {
        car[prop] = c[prop];
      }
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }
}

export class PrimeCar implements Car {
  constructor(
    public vin?,
    public year?,
    public brand?,
    public color?
  ) {}
}




import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Car } from '../cars/Models/car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CarsComponent } from '../cars/cars/cars.component';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {}

  getCarsSmall() {
    console.log('Servicio cargado');
    return this.http.get('assets/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]> res)
      .then(data => {
        return data;
      });
  }
}

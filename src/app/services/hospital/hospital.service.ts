import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";

@Injectable()
export class HospitalService {
  constructor(private http: HttpClient) { }

  public totalHospitales: number = 0;

  cargarHospitales() {
    const url = URL_SERVICIOS + "/hospital";
    return this.http.get(url).map((resp: any) => {
      this.totalHospitales = resp.total;
      return resp.hospitales;
    });
  }


}

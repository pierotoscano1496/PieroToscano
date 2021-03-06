import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersonal } from '../models/interfaces/IPersonal';
import { Services } from './Services';
import { map } from 'rxjs/operators';
import { Personal } from '../models/Personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private urlRest: string = `${Services.urlRest}personal/`;

  constructor(private http: HttpClient) { }

  personales() {
    return this.http.get<Array<IPersonal>>(`${this.urlRest}personales`).pipe(
      map(resp => {
        let personales: Array<Personal> = new Array<Personal>();

        resp.forEach(iPersonal => {
          personales.push(new Personal(iPersonal));
        });

        return personales;
      })
    );
  }

  addPersonal(personal:Personal){
    return this.http.post<IPersonal>(`${this.urlRest}addPersonal`,personal.deserialize()).pipe(
      map(resp=>{
        return new Personal(resp);
      })
    );
  }
}

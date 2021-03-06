import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Hijo } from '../models/Hijo';
import { IHijo } from '../models/interfaces/IHijo';
import { Services } from './Services';

@Injectable({
  providedIn: 'root'
})
export class HijoService {
  private urlRest: string = `${Services.urlRest}hijo/`;

  constructor(private http: HttpClient) { }

  hijosByPersonal(idPersonal: number) {
    return this.http.get<Array<IHijo>>(`${this.urlRest}hijosByPersonal/${idPersonal}`).pipe(
      map(resp => {
        let hijos: Array<Hijo> = new Array<Hijo>();

        resp.forEach(iHijo => {
          hijos.push(new Hijo(iHijo));
        });

        return hijos;
      })
    );
  }

  addHijo(hijo: Hijo) {
    return this.http.post<IHijo>(`${this.urlRest}addHijo`, hijo.deserialize()).pipe(
      map(resp => {
        return new Hijo(resp);
      })
    );
  }
}

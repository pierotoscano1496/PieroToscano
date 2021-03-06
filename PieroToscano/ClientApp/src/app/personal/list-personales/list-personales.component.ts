import { error } from '@angular/compiler/src/util';
import { Component, OnInit, Inject } from '@angular/core';
import { Personal } from '../../models/Personal';
import { PersonalService } from '../../services/personal.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListHijosByPersonalComponent } from '../../hijo/list-hijos-by-personal/list-hijos-by-personal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-personales',
  templateUrl: './list-personales.component.html',
  styleUrls: ['./list-personales.component.css']
})
export class ListPersonalesComponent implements OnInit {
  displayedColumns: string[] = ["idPersonal", "nombreCompleto", "fchNac", "fchIngreso", "getHijos", "addHijo"];
  private _personales: Array<Personal>;

  constructor(private _personalService: PersonalService, private _route: ActivatedRoute, private _router: Router, public dialogVerHijos: MatDialog) { }

  ngOnInit() {
    this.getListPersonales();
  }

  /**
   * Getter personales
   * @return {Array<Personal>}
   */
  public get personales(): Array<Personal> {
    return this._personales;
  }

  /**
   * Setter personales
   * @param {Array<Personal>} value
   */
  public set personales(value: Array<Personal>) {
    this._personales = value;
  }

  getListPersonales() {
    this._personalService.personales().subscribe(listPersonales => {
      this._personales = listPersonales;
    }, error => {
      console.log(error);
    });
  }

  openDialogVerHijos(idPersonal: number): void {
    const dialogRef = this.dialogVerHijos.open(ListHijosByPersonalComponent, {
      height: '400px',
      width: '600px',
      data: { idPersonal: idPersonal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog de listado de hijos cerrado');
    });
  }

  addHijo(idPersonal: number) {
    this._router.navigate(["/add-hijo", idPersonal], { relativeTo: this._route.parent });
  }
}

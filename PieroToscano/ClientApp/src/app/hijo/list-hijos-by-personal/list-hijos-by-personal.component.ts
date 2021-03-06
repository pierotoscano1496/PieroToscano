import { Component, OnInit, Inject } from '@angular/core';
import { Hijo } from 'src/app/models/Hijo';
import { HijoService } from 'src/app/services/hijo.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  idPersonal: number;
}

@Component({
  selector: 'app-list-hijos-by-personal',
  templateUrl: './list-hijos-by-personal.component.html',
  styleUrls: ['./list-hijos-by-personal.component.css']
})
export class ListHijosByPersonalComponent implements OnInit {
  displayedColumns: string[] = ["idDerhab", "nombreCompleto", "fchNac"];
  private _hijos: Array<Hijo>;

  constructor(private _hijoService: HijoService, public dialogRef: MatDialogRef<ListHijosByPersonalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.getListHijosByPersonal(this.data.idPersonal);
  }

  /**
   * Getter hijos
   * @return {Array<Hijo>}
   */
  public get hijos(): Array<Hijo> {
    return this._hijos;
  }

  /**
   * Setter hijos
   * @param {Array<Hijo>} value
   */
  public set hijos(value: Array<Hijo>) {
    this._hijos = value;
  }

  getListHijosByPersonal(idPersonal: number) {
    this._hijoService.hijosByPersonal(idPersonal).subscribe(listHijos => {
      this._hijos = listHijos;
    }, error => {
      console.log(error);
    });
  }

}

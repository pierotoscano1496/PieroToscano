import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hijo } from 'src/app/models/Hijo';
import { HijoService } from 'src/app/services/hijo.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-hijo',
  templateUrl: './add-hijo.component.html',
  styleUrls: ['./add-hijo.component.css'],
})
export class AddHijoComponent implements OnInit {
  maxDate: Date;
  private _idPersonal: number;
  private _hijo: Hijo;
  private _formAddHijo: FormGroup;

  constructor(private _hijoService: HijoService, private _route: ActivatedRoute, private _router: Router, public dialogSuccess: MatDialog, public dialogFailed: MatDialog) {
    this.maxDate = new Date();
    this._idPersonal = Number(this._route.snapshot.params.idPersonal as string);
    this._formAddHijo = new FormGroup({
      apPaterno: new FormControl('', [Validators.required]),
      apMaterno: new FormControl('', [Validators.required]),
      nombre1: new FormControl('', [Validators.required]),
      nombre2: new FormControl(''),
      fchNac: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    console.log(this._idPersonal);
  }

  /**
   * Getter hijo
   * @return {Hijo}
   */
  public get hijo(): Hijo {
    return this._hijo;
  }

  /**
   * Setter hijo
   * @param {Hijo} value
   */
  public set hijo(value: Hijo) {
    this._hijo = value;
  }


  addHijo() {
    this._hijoService.addHijo(this._hijo).subscribe(hijoAdded => {
      if (hijoAdded) {
        this.openDialogSuccess();
      }
    }, error => {
      this.openDialogFailed();
    })
  }

  /**
 * Getter formAddHijo
 * @return {FormGroup}
 */
  public get formAddHijo(): FormGroup {
    return this._formAddHijo;
  }

  /**
   * Setter formAddHijo
   * @param {FormGroup} value
   */
  public set formAddHijo(value: FormGroup) {
    this._formAddHijo = value;
  }

  submitAddHijo() {
    const apPaterno: string = this._formAddHijo.get("apPaterno").value as string;
    const apMaterno: string = this._formAddHijo.get("apMaterno").value as string;
    const nombre1: string = this._formAddHijo.get("nombre1").value as string;
    const nombre2: string = this._formAddHijo.get("nombre2").value as string;
    const fchNac: Date = this._formAddHijo.get("fchNac").value as Date;

    this._hijo = new Hijo({
      idDerhab: 0,
      idPersonal: this._idPersonal,
      apPaterno: apPaterno,
      apMaterno: apMaterno,
      nombre1: nombre1,
      nombre2: nombre2,
      nombreCompleto: null,
      fchNac: fchNac
    });

    this.addHijo();
  }

  openDialogSuccess() {
    const dialogRef = this.dialogSuccess.open(DialogAddHijoSuccess);

    dialogRef.afterClosed().subscribe(result => {
      this._router.navigate(["/list-personales"], { relativeTo: this._route.parent });
    });
  }

  openDialogFailed() {
    this.dialogFailed.open(DialogAddHijoFailed);
  }
}

@Component({
  selector: 'dialog-add-hijo-success',
  templateUrl: 'dialog-add-hijo-success.html',
})
export class DialogAddHijoSuccess { }

@Component({
  selector: 'dialog-add-hijo-failed',
  templateUrl: 'dialog-add-hijo-failed.html',
})
export class DialogAddHijoFailed { }

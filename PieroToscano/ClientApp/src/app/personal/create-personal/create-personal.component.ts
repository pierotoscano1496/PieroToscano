import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Personal } from '../../models/Personal';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-create-personal',
  templateUrl: './create-personal.component.html',
  styleUrls: ['./create-personal.component.css']
})
export class CreatePersonalComponent implements OnInit {
  private _personal: Personal;

  constructor(private _personalService: PersonalService) { }

  ngOnInit() {
  }

  /**
   * Getter personal
   * @return {Personal}
   */
  public get personal(): Personal {
    return this._personal;
  }

  /**
   * Setter personal
   * @param {Personal} value
   */
  public set personal(value: Personal) {
    this._personal = value;
  }
  
  addPersonal(personal: Personal) {
    this._personalService.addPersonal(personal).subscribe(personalAdded => {
      if (personalAdded) {
        console.log("Success");
      }
    }, error => {
      console.log(error);
    })
  }
}

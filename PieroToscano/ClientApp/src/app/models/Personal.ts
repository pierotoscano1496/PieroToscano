import { IPersonal } from './interfaces/IPersonal';

export class Personal {
  private _idPersonal: number;
  private _apPaterno: string;
  private _apMaterno: string;
  private _nombre1: string;
  private _nombre2: string;
  private _nombreCompleto: string;
  private _fchNac: Date;
  private _fchIngreso: Date;

  constructor(personal: IPersonal) {
    this._idPersonal = personal.idPersonal;
    this._apPaterno = personal.apPaterno;
    this._apMaterno = personal.apMaterno;
    this._nombre1 = personal.nombre1;
    this._nombre2 = personal.nombre2;
    this._nombreCompleto = personal.nombreCompleto;
    this._fchNac = personal.fchNac;
    this._fchIngreso = personal.fchIngreso;
  }

  /**
   * Getter idPersonal
   * @return {number}
   */
  public get idPersonal(): number {
    return this._idPersonal;
  }

  /**
   * Getter apPaterno
   * @return {string}
   */
  public get apPaterno(): string {
    return this._apPaterno;
  }

  /**
   * Getter apMaterno
   * @return {string}
   */
  public get apMaterno(): string {
    return this._apMaterno;
  }

  /**
   * Getter nombre1
   * @return {string}
   */
  public get nombre1(): string {
    return this._nombre1;
  }

  /**
   * Getter nombre2
   * @return {string}
   */
  public get nombre2(): string {
    return this._nombre2;
  }

  /**
   * Getter nombreCompleto
   * @return {string}
   */
  public get nombreCompleto(): string {
    return this._nombreCompleto;
  }

  /**
   * Getter fchNac
   * @return {Date}
   */
  public get fchNac(): Date {
    return this._fchNac;
  }

  /**
   * Getter fchIngreso
   * @return {Date}
   */
  public get fchIngreso(): Date {
    return this._fchIngreso;
  }

  /**
   * Setter idPersonal
   * @param {number} value
   */
  public set idPersonal(value: number) {
    this._idPersonal = value;
  }

  /**
   * Setter apPaterno
   * @param {string} value
   */
  public set apPaterno(value: string) {
    this._apPaterno = value;
  }

  /**
   * Setter apMaterno
   * @param {string} value
   */
  public set apMaterno(value: string) {
    this._apMaterno = value;
  }

  /**
   * Setter nombre1
   * @param {string} value
   */
  public set nombre1(value: string) {
    this._nombre1 = value;
  }

  /**
   * Setter nombre2
   * @param {string} value
   */
  public set nombre2(value: string) {
    this._nombre2 = value;
  }

  /**
   * Setter nombreCompleto
   * @param {string} value
   */
  public set nombreCompleto(value: string) {
    this._nombreCompleto = value;
  }

  /**
   * Setter fchNac
   * @param {Date} value
   */
  public set fchNac(value: Date) {
    this._fchNac = value;
  }

  /**
   * Setter fchIngreso
   * @param {Date} value
   */
  public set fchIngreso(value: Date) {
    this._fchIngreso = value;
  }

  deserialize(): IPersonal {
    return {
      idPersonal: this._idPersonal,
      apPaterno: this._apPaterno,
      apMaterno: this._apMaterno,
      nombre1: this._nombre1,
      nombre2: this._nombre2,
      nombreCompleto: this._nombreCompleto,
      fchNac: this._fchNac,
      fchIngreso: this._fchIngreso
    }
  }
}

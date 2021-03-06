import { IHijo } from "./interfaces/IHijo";

export class Hijo {
  private _idDerhab: number;
  private _idPersonal: number;
  private _apPaterno: string;
  private _apMaterno: string;
  private _nombre1: string;
  private _nombre2: string;
  private _nombreCompleto: string;
  private _fchNac: Date;

  constructor(hijo?: IHijo);
  constructor(hijo: IHijo) {
    if (hijo) {
      this._idDerhab = hijo.idDerhab;
      this._idPersonal = hijo.idPersonal;
      this._apPaterno = hijo.apPaterno;
      this._apMaterno = hijo.apMaterno;
      this._nombre1 = hijo.nombre1;
      this._nombre2 = hijo.nombre2;
      this._nombreCompleto = hijo.nombreCompleto;
      this._fchNac = hijo.fchNac;
    }
  }

  /**
   * Getter idDerhab
   * @return {number}
   */
  public get idDerhab(): number {
    return this._idDerhab;
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
   * Setter idDerhab
   * @param {number} value
   */
  public set idDerhab(value: number) {
    this._idDerhab = value;
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

  deserialize(): IHijo {
    return {
      idDerhab: this._idDerhab,
      idPersonal: this._idPersonal,
      apPaterno: this._apPaterno,
      apMaterno: this._apMaterno,
      nombre1: this._nombre1,
      nombre2: this._nombre2,
      nombreCompleto: this._nombreCompleto,
      fchNac: this._fchNac
    }
  }
}

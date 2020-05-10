import { Injectable } from '@angular/core';
import {IsFacture} from '../model/is-facture.model';

@Injectable({
  providedIn: 'root'
})
export class IsFactureService {
  private _isFacture: IsFacture;
  private _isFactures: Array<IsFacture>;
  constructor() { }


  get isFacture(): IsFacture {
    if(this._isFacture== null){
      this._isFacture= new IsFacture();
    }
    return this._isFacture;
  }

  set isFacture(value: IsFacture) {
    this._isFacture = value;
  }

  get isFactures(): Array<IsFacture> {
    if(this._isFactures== null){
      this._isFactures= new Array<IsFacture>();
    }
    return this._isFactures;
  }

  set isFactures(value: Array<IsFacture>) {
    this._isFactures = value;
  }
}

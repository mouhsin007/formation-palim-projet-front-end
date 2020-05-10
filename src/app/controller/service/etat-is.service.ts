import { Injectable } from '@angular/core';
import {EtatIs} from '../model/etat-is.model';

@Injectable({
  providedIn: 'root'
})
export class EtatIsService {

  private _etatIs: EtatIs;
  private _etatISs: Array<EtatIs>;
  constructor() { }

  get etatIs(): EtatIs {
    if(this._etatIs== null){
      this._etatIs= new EtatIs();
    }
    return this._etatIs;
  }

  set etatIs(value: EtatIs) {
    this._etatIs = value;
  }

  get etatISs(): Array<EtatIs> {
    if(this._etatISs== null){
      this._etatISs= new Array<EtatIs>();
    }
    return this._etatISs;
  }

  set etatISs(value: Array<EtatIs>) {
    this._etatISs = value;
  }
}

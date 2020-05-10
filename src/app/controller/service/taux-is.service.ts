import { Injectable } from '@angular/core';
import {TauxIs} from '../model/taux-is.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TauxIsService {
  private _tauxIs: TauxIs;
  private _tauxISs: Array<TauxIs>;
  constructor(private http: HttpClient) { }

  public ajouter(){
    this.http.post<TauxIs>('http://localhost:8091/is/TauxIs/', this.tauxIs).subscribe();
  }

  get tauxIs(): TauxIs {
    if(this._tauxIs== null){
      this._tauxIs= new TauxIs();
    }
    return this._tauxIs;
  }

  set tauxIs(value: TauxIs) {
    this._tauxIs = value;
  }

  get tauxISs(): Array<TauxIs> {
    if(this._tauxISs== null){
      this._tauxISs= new Array<TauxIs>();
    }
    return this._tauxISs;
  }

  set tauxISs(value: Array<TauxIs>) {
    this._tauxISs = value;
  }
}

import { Injectable } from '@angular/core';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private _facture: Facture;
  private _factures: Array<Facture>;
  constructor(private http: HttpClient) { }

  public ajouter(){
    this.http.put<Facture>('http://localhost:8091/is/facture/ajouter-une-facture/', this.facture).subscribe(
      data=>{
        if(data == null){
          alert('cette facture existe deja');
        }
        else {
        this.factures.push(data);
        console.log('bien');}
      },error => {
        console.log('erreur')
      }
    )
  }
  public saveFacture(){
    this.http.post<number>('http://localhost:8091/is/facture/save-list-facture/', this.factures).subscribe(
      data=>{
        if(data==1){
          console.log('bien');
        }
      },error => {
        console.log('erreur');
      }
    )

  }

  get facture(): Facture {
    if (this._facture==null){
      this._facture= new Facture();
    }

    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }

  get factures(): Array<Facture> {
    if(this._factures==null){
      this._factures= new Array<Facture>();
    }
    return this._factures;
  }

  set factures(value: Array<Facture>) {
    this._factures = value;
  }
}

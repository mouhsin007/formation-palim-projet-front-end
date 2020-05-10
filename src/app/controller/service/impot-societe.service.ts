import { Injectable } from '@angular/core';
import {ImpotSociete} from '../model/impot-societe.model';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImpotSocieteService {
  private _impotSociete: ImpotSociete;
  private _impotSocietes: Array<ImpotSociete>;
  private _facture: Facture;
  private _factures: Array<Facture>;
  private _factureGains: Array<Facture>;
  private _factureCharges: Array<Facture>;
  private _totalTvaGain: number;
  private _totalTvaCharge: number;
  constructor(private http: HttpClient) { }
  public addList(){
    this.http.get<ImpotSociete>('http://localhost:8091/is/impotSociete/find-factures-by-annee/'+ this.impotSociete.anne).subscribe(
      data =>{
        this.impotSociete= data;

      }
    )
  }
  public save(){
    this.http.post<number>('http://localhost:8091/is/impotSociete/save-is-et-is-facture/', this.impotSociete).subscribe(
      data =>{
        if (data==1){
          console.log('bien');
        }
      },error=>{
        console.log('erreur');
      }
    )
  }
  public findDeclaration() {
    this.http.get<Array<ImpotSociete>>('http://localhost:8091/is/impotSociete/').subscribe(
      data => {
        this.impotSocietes = data;
      }
    );
  }



  get impotSociete(): ImpotSociete {
    if(this._impotSociete== null){
      this._impotSociete= new ImpotSociete();
    }
    return this._impotSociete;
  }

  set impotSociete(value: ImpotSociete) {
    this._impotSociete = value;
  }

  get impotSocietes(): Array<ImpotSociete> {
    if(this._impotSocietes== null){
      this._impotSocietes= new Array<ImpotSociete>();
    }
    return this._impotSocietes;
  }

  set impotSocietes(value: Array<ImpotSociete>) {
    this._impotSocietes = value;
  }

  get facture(): Facture {
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }

  get factures(): Array<Facture> {
    return this._factures;
  }

  set factures(value: Array<Facture>) {
    this._factures = value;
  }

  get factureGains(): Array<Facture> {
    return this._factureGains;
  }

  set factureGains(value: Array<Facture>) {
    this._factureGains = value;
  }

  get factureCharges(): Array<Facture> {
    return this._factureCharges;
  }

  set factureCharges(value: Array<Facture>) {
    this._factureCharges = value;
  }

  get totalTvaGain(): number {
    return this._totalTvaGain;
  }

  set totalTvaGain(value: number) {
    this._totalTvaGain = value;
  }

  get totalTvaCharge(): number {
    return this._totalTvaCharge;
  }

  set totalTvaCharge(value: number) {
    this._totalTvaCharge = value;
  }
}

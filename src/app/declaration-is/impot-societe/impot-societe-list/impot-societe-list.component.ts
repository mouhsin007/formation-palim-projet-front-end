import { Component, OnInit } from '@angular/core';
import {ImpotSocieteService} from '../../../controller/service/impot-societe.service';
import {ImpotSociete} from '../../../controller/model/impot-societe.model';
import {Facture} from '../../../controller/model/facture.model';

@Component({
  selector: 'app-impot-societe-list',
  templateUrl: './impot-societe-list.component.html',
  styleUrls: ['./impot-societe-list.component.css']
})
export class ImpotSocieteListComponent implements OnInit {

  constructor(private impotSocieteService: ImpotSocieteService) { }

  ngOnInit(): void {
  }
  public save(){
    this.impotSocieteService.save();
  }
  get impotSociete(): ImpotSociete {
    return this.impotSocieteService.impotSociete;
  }
  get factureCharges(): Array<Facture> {
    return this.impotSocieteService.factureCharges;
  }
  get factureGains(): Array<Facture> {
    return this.impotSocieteService.factureGains;
  }
  get totalTvaCharge(): number {
    return this.impotSocieteService.totalTvaCharge;
  }
  get totalTvaGain(): number {
    return this.impotSocieteService.totalTvaGain;
  }

}

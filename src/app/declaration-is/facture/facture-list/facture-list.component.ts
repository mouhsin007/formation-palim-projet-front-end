import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../../controller/service/facture.service';
import {Facture} from '../../../controller/model/facture.model';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  constructor(private factureService: FactureService) { }

  ngOnInit(): void {
  }
  public saveFacture(){
    this.factureService.saveFacture();
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }
}

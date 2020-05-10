import { Component, OnInit } from '@angular/core';
import {ImpotSociete} from '../controller/model/impot-societe.model';
import {ImpotSocieteService} from '../controller/service/impot-societe.service';

@Component({
  selector: 'app-declaration-is',
  templateUrl: './declaration-is.component.html',
  styleUrls: ['./declaration-is.component.css']
})
export class DeclarationIsComponent implements OnInit {
  showModal: any;

  constructor(private impotSocieteService: ImpotSocieteService) { }

  ngOnInit(): void {
  }
  get impotSociete(): ImpotSociete {
   return this.impotSocieteService.impotSociete;
  }



  get impotSocietes(): Array<ImpotSociete> {
   return this.impotSocieteService.impotSocietes;
  }
}

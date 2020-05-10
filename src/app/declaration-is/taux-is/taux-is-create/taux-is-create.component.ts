import { Component, OnInit } from '@angular/core';
import {TauxIs} from '../../../controller/model/taux-is.model';
import {TauxIsService} from '../../../controller/service/taux-is.service';

@Component({
  selector: 'app-taux-is-create',
  templateUrl: './taux-is-create.component.html',
  styleUrls: ['./taux-is-create.component.css']
})
export class TauxIsCreateComponent implements OnInit {

  constructor(private tauxIsService: TauxIsService) { }

  ngOnInit(): void {
  }
  get tauxIs(): TauxIs {
   return this.tauxIsService.tauxIs;
  }
  public ajouter(){
    this.tauxIsService.ajouter();
  }
}

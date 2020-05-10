import { Component, OnInit } from '@angular/core';
import {ImpotSocieteService} from '../../../controller/service/impot-societe.service';
import {ImpotSociete} from '../../../controller/model/impot-societe.model';

@Component({
  selector: 'app-impot-societe-create',
  templateUrl: './impot-societe-create.component.html',
  styleUrls: ['./impot-societe-create.component.css']
})
export class ImpotSocieteCreateComponent implements OnInit {
  constructor(private impotSocieteService: ImpotSocieteService) { }

  ngOnInit(): void {
  }
  get impotSociete(): ImpotSociete {
    return this.impotSocieteService.impotSociete;
  }
  public addList(){
    this.impotSocieteService.addList();
  }
}

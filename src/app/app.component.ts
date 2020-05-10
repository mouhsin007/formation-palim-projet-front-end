import { Component } from '@angular/core';
import {ImpotSocieteService} from './controller/service/impot-societe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'declaration-is';
constructor(private impotSocieteService: ImpotSocieteService) {}
public findDeclaration(){
  return this.impotSocieteService.findDeclaration();
}
}

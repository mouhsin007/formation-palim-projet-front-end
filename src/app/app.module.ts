import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeclarationIsComponent } from './declaration-is/declaration-is.component';
import { FactureComponent } from './declaration-is/facture/facture.component';
import { FactureCreateComponent } from './declaration-is/facture/facture-create/facture-create.component';
import { FactureListComponent } from './declaration-is/facture/facture-list/facture-list.component';
import { ImpotSocieteComponent } from './declaration-is/impot-societe/impot-societe.component';
import { ImpotSocieteCreateComponent } from './declaration-is/impot-societe/impot-societe-create/impot-societe-create.component';
import { ImpotSocieteListComponent } from './declaration-is/impot-societe/impot-societe-list/impot-societe-list.component';
import { IsFactureComponent } from './declaration-is/is-facture/is-facture.component';
import { IsFactureCreateComponent } from './declaration-is/is-facture/is-facture-create/is-facture-create.component';
import { IsFactureListComponent } from './declaration-is/is-facture/is-facture-list/is-facture-list.component';
import { TauxIsComponent } from './declaration-is/taux-is/taux-is.component';
import { TauxIsCreateComponent } from './declaration-is/taux-is/taux-is-create/taux-is-create.component';
import { TauxIsListComponent } from './declaration-is/taux-is/taux-is-list/taux-is-list.component';
import { EtatIsComponent } from './declaration-is/etat-is/etat-is.component';
import { EtatIsCreateComponent } from './declaration-is/etat-is/etat-is-create/etat-is-create.component';
import { EtatIsListComponent } from './declaration-is/etat-is/etat-is-list/etat-is-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PopupDeclarationIsComponent } from './popup-declaration-is/popup-declaration-is.component';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationIsComponent,
    FactureComponent,
    FactureCreateComponent,
    FactureListComponent,
    ImpotSocieteComponent,
    ImpotSocieteCreateComponent,
    ImpotSocieteListComponent,
    IsFactureComponent,
    IsFactureCreateComponent,
    IsFactureListComponent,
    TauxIsComponent,
    TauxIsCreateComponent,
    TauxIsListComponent,
    EtatIsComponent,
    EtatIsCreateComponent,
    EtatIsListComponent,
    PopupDeclarationIsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '' , component: ImpotSocieteComponent},
      {path: 'facture' , component: FactureComponent},
      {path: 'taux-is' , component: TauxIsCreateComponent},
      {path: 'déclaration-is' , component: DeclarationIsComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

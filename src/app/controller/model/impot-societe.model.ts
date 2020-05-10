import {EtatIs} from './etat-is.model';
import {Facture} from './facture.model';
import {IsFacture} from './is-facture.model';

export class ImpotSociete {
  public id: number;

  public isFactures= new Array<IsFacture>();


  public totalCharge: number;

  public totalGain: number;

  public profit: number;

  public montantTotal: number;

  public montantBaseIs: number;

  public montantRetard: number;

  public montantMajoration: number;

  public montantPenalite: number;

  public nomberMoisRetard: number;

  public description: string;
  public reference: string;
  public referenceComptableValidateur: string;
  public referenceComptableCreateur: string;


  public anne: number;
  public mois: number;// numero de mois ou de trim

  public honoraire: number;

  public penalite: number;

  public majoration: number;


  public etatIs: EtatIs;
  public dateValidation: Date;

  public dateSoumission: Date;

  public dateAffectationComptable: Date;

  public dateFinalisation: Date;

  public dateSaisie: Date;
  public factureGains= new Array<Facture>();
  public factureCharges= new Array<Facture>();

}

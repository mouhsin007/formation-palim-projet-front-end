import {ImpotSociete} from './impot-societe.model';

export class IsFacture {
  private id: number;

  public impotSociete: ImpotSociete;
  public referenceFactur: string;
  public referenceSociete: string;
}

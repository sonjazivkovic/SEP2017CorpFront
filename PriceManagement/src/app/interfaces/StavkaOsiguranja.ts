import { VrednostStavkeOsiguranja } from './VrednostStavkeOsiguranja';

export interface StavkaOsiguranja {
  readonly id: number;
  readonly version: number;
  readonly naziv: string;
  readonly vrednosti: VrednostStavkeOsiguranja[];
}

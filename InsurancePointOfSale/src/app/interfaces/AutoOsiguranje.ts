/**
 * Created by Sonja on 1/19/2018.
 */
export interface AutoOsiguranje {
  readonly trajanje: number;
  readonly paket: string;
  readonly slepovanjeDo: number;
  readonly popravkaDo: number;
  readonly smestajDo: number;
  readonly altPrevoz: string;
  readonly markaVozila: string;
  readonly tipVozila: string;
  readonly godinaProizvodnje: number;
  readonly brojRegTablice: string;
  readonly brojSasije: string;
  readonly imeVlasnika: string;
  readonly prezimeVlasnika: string;
  readonly jmbgVlasnika: string;
}

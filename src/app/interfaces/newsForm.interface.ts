export interface NewsForm {
  id?: number,  // ? -> optionnel
  categorie?: string | null,
  titre?: string | null,
  texte?: string | null,
  datePublication: Date,
  dateModification: Date,
  image?: string | null
}

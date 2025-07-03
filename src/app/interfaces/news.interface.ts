export interface News {
  id?: number,  // ? -> optionnel
  categorie: string,
  titre: string,
  texte: string,
  datePublication: Date,
  dateModification: Date,
  image?: string
}

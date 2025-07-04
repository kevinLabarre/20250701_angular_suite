import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from '../../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class ShareNewsService {

  constructor() { }

  // private newsId = new BehaviorSubject<number>(0)

  private news = new BehaviorSubject<News>({
    categorie: "",
    titre: "",
    texte: "",
    datePublication: new Date(),
    dateModification: new Date(),
  })




  newsShareByService$ = this.news.asObservable() // conversion en observable; pour manipuler plus facilement les abonnements côté composant

  shareNews(news: News) {
    this.news.next(news)   //  Le .next d'un BehaviorSubject permet de 'push' une nouvelle valeur qui remplacera l'ancienne
  }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { News } from '../../interfaces/news.interface';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/actualites"  // + /ID

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(this.url)
  }


  // 1. Implémenter la méthode getById(id: number)
  // 2. Utiliser la méthode sur le composant "ActualiteDetailPageComponent" pour récupérer une actualité
  //     -> s'aider de 'NewsPageComponent'
  // 3. Afficher les données


  // 4. Implementer le bouton 'lire la suite' pour qu'il redirige vers la page 'details-acutualité/id'
  // 5. Lorsque on a une erreur (par exemple lorsque l'id n'existe pas), rediriger vers la page /actualité

  getById(id: number): Observable<News> {
    return this.http.get<News>(`${this.url}/${id}`)
  }


  // Pour test / simuler une erreur
  getError(id: number): Observable<News> {
    return this.http.get<News>("http://localhost:3000/errorUrl").pipe(
      catchError((err: HttpErrorResponse) => {
        // Créer une nouvelle erreur HTTP avec statut 400
        const customError = new HttpErrorResponse({
          error: {
            message: 'Erreur personnalisée',
            originalError: err.error
          },
          status: 400,
          statusText: 'Bad Request'
        });

        // Renvoyer l'erreur personnalisée dans le flux
        return throwError(() => customError);
      })
    );
  }

}

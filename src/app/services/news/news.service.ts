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

  getById(id: number): Observable<News> {
    return this.http.get<News>(`${this.url}/${id}`)
  }


  addNews(news: News): Observable<News> {
    return this.http.post<News>(this.url, news)
  }

  // `${this.url}/${id}`  pour supprimer
  delete(id: number): Observable<News> {
    return this.http.delete<News>(`${this.url}/${id}`)
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

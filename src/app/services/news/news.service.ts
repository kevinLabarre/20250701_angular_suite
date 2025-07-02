import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/actualites"

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(this.url)
  }

  getError(): Observable<News[]> {
    return this.http.get<News[]>("http://localhost:3000/errorUrl")
  }

}

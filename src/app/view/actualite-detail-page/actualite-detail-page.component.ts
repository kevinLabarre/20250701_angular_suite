import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NewsService } from '../../services/news/news.service';
import { NewsCardComponent } from "../../components/news-card/news-card.component";
import { News } from '../../interfaces/news.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-actualite-detail-page',
  imports: [RouterOutlet, RouterLink, NewsCardComponent],
  templateUrl: './actualite-detail-page.component.html',
  styleUrl: './actualite-detail-page.component.css'
})
export class ActualiteDetailPageComponent implements OnInit {

  id: number = 0 // id présent dans l'url

  news?: News;
  httpError?: Error

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NewsService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => this.id = params['id'])
  }
  ngOnInit(): void {
    this.service.getError(this.id).subscribe({
      next: (resp) => this.news = resp,
      error: (err: HttpErrorResponse) => {
        this.httpError = err
        if (err.status == 404) {
          this.router.navigate(['/actualites'])
        }
      }
    })
  }



}

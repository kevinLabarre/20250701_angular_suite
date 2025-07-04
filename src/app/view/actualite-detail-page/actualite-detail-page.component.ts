import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NewsService } from '../../services/news/news.service';
import { NewsCardComponent } from "../../components/news-card/news-card.component";
import { News } from '../../interfaces/news.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ShareNewsService } from '../../services/shareNews/share-news.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actualite-detail-page',
  imports: [RouterOutlet, RouterLink, NewsCardComponent],
  templateUrl: './actualite-detail-page.component.html',
  styleUrl: './actualite-detail-page.component.css'
})
export class ActualiteDetailPageComponent implements OnInit, OnDestroy {

  id: number = 0 // id présent dans l'url

  news?: News;
  httpError?: Error

  // Pour gérer les abonnements (à notre service partagé)
  private subscription: Subscription = new Subscription();


  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NewsService,
    private router: Router,
    private shareService: ShareNewsService
  ) {
    this.activatedRoute.params.subscribe((params) => this.id = params['id'])
  }

  ngOnInit(): void {
    this.loadNews()
    this.subscription = this.shareService.newsShareByService$.subscribe(resp => this.news = resp)

  }

  loadNews() {
    this.service.getById(this.id).subscribe({
      next: (resp) => {
        // this.news = resp
        this.shareService.shareNews(resp)
      },
      error: (err: HttpErrorResponse) => {
        this.httpError = err
        if (err.status == 404) {
          this.router.navigate(['/actualites'])
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}

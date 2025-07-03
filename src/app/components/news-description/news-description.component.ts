import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareNewsService } from '../../services/shareNews/share-news.service';
import { Subscription } from 'rxjs';
import { News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-description',
  imports: [],
  templateUrl: './news-description.component.html',
  styleUrl: './news-description.component.css'
})
export class NewsDescriptionComponent implements OnInit, OnDestroy {
  constructor(private service: ShareNewsService) { }

  // Necessaire pour manipuler un observable qui vient d'un de nos 'BehaviorSubject'
  // Pas besoin avec un obsevable de httpClient (requet HTTP), angular/httpCLient gèrent automatiquement la fin de l'abonnement
  private subscription: Subscription = new Subscription();

  newsWihShareService?: News

  ngOnInit(): void {
    this.subscription = this.service.newsShareByService$.subscribe((resp) => this.newsWihShareService = resp)
  }

  ngOnDestroy(): void {
    console.log("onDestroy de news-description")
    // Pour se désabonner
    this.subscription.unsubscribe()
  }

}

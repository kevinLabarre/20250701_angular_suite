import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { News } from '../../interfaces/news.interface';
import { ShareNewsService } from '../../services/shareNews/share-news.service';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {
  inputValue: number = 0

  constructor(private router: Router, private service: ShareNewsService) { }

  handleNavigate() {
    this.router.navigate(["actualites", this.inputValue])
  }





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

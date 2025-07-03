import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { News } from '../../interfaces/news.interface';
import { lastValueFrom } from 'rxjs';
import { NewsListComponent } from "../../components/news-list/news-list.component";
import { NewsFormComponent } from "../../components/news-form/news-form.component";

@Component({
  selector: 'app-news-page',
  imports: [NewsListComponent, NewsFormComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  news?: News[];
  errorMessage?: string

  displayForm: boolean = false
  ngOnInit(): void {
    // this.newsService.getAllNews().subscribe((resp) => {
    //   console.log(resp);
    //   this.news = resp
    // })

    this.loadNews()


    // this.asyncLoadNews()
  }

  loadNews() {
    this.errorMessage = undefined
    this.news = undefined
    this.newsService.getAllNews().subscribe({
      next: (resp) => {
        console.log(resp);
        this.news = resp
      },
      error: (err) => this.errorMessage = err.message,
      complete: () => console.log("Dernière données reçue") // ne se déclenche pas après l'erreur. Le complete se déclenche quand la dernière donnée est reçu à condition que cette dernière donnée ne soit pas une erreur
      // Pour de l'http classique, il n'est pas intéresant d'utiliser le complete, car il ne se déclenchera pas avec une erreur
    }).add(() => console.log("Requête terminée"))
  }




  async asyncLoadNews() {
    try {
      const response = await lastValueFrom(this.newsService.getAllNews())
      console.log(response)
      this.news = response
    } catch (err) {
      console.error(err)
    }
    console.log("requete terminée")
  }


}

import { Component, input, Input, OnInit } from '@angular/core';
import { News } from '../../interfaces/news.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  imports: [RouterLink],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent implements OnInit {
  // @Input({ required: true }) news!: News

  // Nouvelle syntaxe si utilisation des signaux
  // news = input<News>
  news = input.required<News>()  // si obligatoire

  ngOnInit(): void {
    console.log(this.news())
  }


  // news = input.required<News>() // obligatoire
}



// @Component({
//   selector: 'app-news-card',
//   imports: [RouterLink],
//   templateUrl: './news-card.component.html',
//   styleUrl: './news-card.component.css'
// })
// export class NewsCardComponent {

//   //@Input({required:true})  news!:News;
//   //@Input({required:true}) displayButtons:boolean=true

//   // new sintax with signals
//   // not obligatoire news = input<News>
//   news = input.required<News>() // obligatoire
//   // displayButtons = input<boolean>()

// }

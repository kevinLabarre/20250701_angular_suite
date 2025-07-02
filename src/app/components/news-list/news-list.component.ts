import { Component, Input } from '@angular/core';
import { News } from '../../interfaces/news.interface';
import { NewsCardComponent } from "../news-card/news-card.component";

@Component({
  selector: 'app-news-list',
  imports: [NewsCardComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  @Input({ required: true }) news: News[] = [];
}

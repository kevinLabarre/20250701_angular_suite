import { Component, Input } from '@angular/core';
import { News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input({ required: true }) news!: News
}

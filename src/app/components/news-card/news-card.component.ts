import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { News } from '../../interfaces/news.interface';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { NewsService } from '../../services/news/news.service';
import { DatePipe } from '@angular/common';
import { MyCustomDatePipe } from '../../pipes/Date/my-custom-date.pipe';

@Component({
  selector: 'app-news-card',
  imports: [RouterLink, NgIcon, DatePipe, MyCustomDatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent implements OnInit {

  constructor(private service: NewsService) { }

  // @Input({ required: true }) news!: News

  // Nouvelle syntaxe si utilisation des signaux
  // news = input<News>
  news = input.required<News>()  // si obligatoire

  @Output() handleDelete = new EventEmitter<number>()


  ngOnInit(): void {
    console.log(this.news())
  }

  handleClickDelete() {
    if (this.news().id)
      this.service.delete(this.news().id!).subscribe({
        next: (resp) => this.handleDelete.emit(resp.id),
        error: (err) => console.error(err)
      })
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareNewsService } from '../../services/shareNews/share-news.service';
import { Subscription } from 'rxjs';
import { News } from '../../interfaces/news.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../../services/news/news.service';
import { NewsForm } from '../../interfaces/newsForm.interface';


// interface NewsForm {
//   id?: number,  // ? -> optionnel
//   categorie: string | null,
//   titre: string | null,
//   texte: string | null,
//   datePublication: Date,
//   dateModification: Date,
//   image: string | null
// }



@Component({
  selector: 'app-update-news',
  imports: [ReactiveFormsModule],
  templateUrl: './update-news.component.html',
  styleUrl: './update-news.component.css'
})
export class UpdateNewsComponent implements OnInit, OnDestroy {
  constructor(private service: ShareNewsService, private newsService: NewsService) { }

  private subscription: Subscription = new Subscription();
  newsWihShareService?: News

  newsForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    texte: new FormControl('', Validators.required),
    image: new FormControl(''),
    categorie: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.subscription = this.service.newsShareByService$.subscribe((resp) => {
      this.newsWihShareService = resp
      this.newsForm.patchValue(resp)
    })
  }


  handleUpdate() {
    console.log(this.newsForm.value)

    // const NewsValueForm: News = {
    //   id: this.newsWihShareService!.id,
    //   titre: this.newsForm.value.titre!,
    //   texte: this.newsForm.value.texte!,
    //   categorie: this.newsForm.value.categorie!,
    //   image: this.newsForm.value.image!,
    //   dateModification: new Date()!,
    //   datePublication: this.newsWihShareService!.datePublication
    // }


    // Avec ce genre de logique, bien s'appliquer avec les valeurs par défaut et les validators
    // L'interface NewsForm autorise du null et du undefined sur toutes ses propriétés
    const test: NewsForm = {
      ...this.newsForm.value,
      id: this.newsWihShareService!.id!,
      datePublication: this.newsWihShareService!.datePublication,
      dateModification: new Date()
    }

    const id = this.newsWihShareService!.id

    if (id)
      this.newsService.updateNews(id, test).subscribe({
        next: (resp) => this.service.shareNews(resp),
        error: (err) => console.error(err)
      })
  }


  ngOnDestroy(): void {
    // Pour se désabonner
    this.subscription.unsubscribe()
  }



}

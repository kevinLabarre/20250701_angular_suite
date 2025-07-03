import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { News } from '../../interfaces/news.interface';
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-news-form',
  imports: [ReactiveFormsModule],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.css'
})
export class NewsFormComponent {

  constructor(private service: NewsService) { }

  newsForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    texte: new FormControl('', Validators.required),
    image: new FormControl(''),
    categorie: new FormControl('', Validators.required),
  })


  // Sur angular, avec  un @Output, on utilise TOUJOURS un EventEmitter
  @Output() newsAdded = new EventEmitter<News>

  handleSubmit() {
    // if (this.newsForm.invalid)
    if (this.newsForm.valid) {
      console.log(this.newsForm.value)

      const value = this.newsForm.value  // Récupérer les valeurs entrées dans les inputs
      const news: News = {
        titre: value.titre!,
        texte: value.texte!,
        categorie: value.categorie!,
        datePublication: new Date(),
        dateModification: new Date()
      }

      if (value.image)
        news.image = value.image

      this.service.addNews(news).subscribe({
        next: (resp) => this.newsAdded.emit(resp),  // Fonction qui se lance uniquement si retour sans erreur
        error: (err) => console.error(err)
      })


    } else {
      this.newsForm.markAllAsTouched() // marquer tous les champs comme 'touched'
      console.log("Erreur remplissage")
    }

  }

  get requiredError() {
    const errors = this.newsForm.get('titre')?.errors
    if (errors) {
      if (errors['required'])
        return errors['required']
      else return false
    } else return false
  }

  get maxLengthError() {
    const errors = this.newsForm.get('titre')?.errors
    if (errors) {
      if (errors['maxLength'])
        return errors['maxLength']
      else return false
    } else return false
  }

  get titleTouched() {
    return this.newsForm.get('titre')?.touched
  }


  get textError() {
    const errors = this.newsForm.get('texte')?.errors
    if (errors)
      return true
    else return false
  }

  get categorieError() {
    const errors = this.newsForm.get('categorie')?.errors
    if (errors)
      return true
    else return false
  }

  get textTouched() {
    return this.newsForm.get('texte')?.touched
  }

  get categorieTouched() {
    return this.newsForm.get('categorie')?.touched
  }

}


import { Component } from '@angular/core';
import { FormControl, FormGroup, isFormArray, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  imports: [ReactiveFormsModule],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.css'
})
export class NewsFormComponent {

  newsForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    texte: new FormControl('', Validators.required),
    image: new FormControl(''),
    categorie: new FormControl('', Validators.required),
  })

  handleSubmit() {
    // if (this.newsForm.invalid)
    if (this.newsForm.valid) {
      console.log("Formulaire envoyé !")
      console.log(this.newsForm.value)
    } else console.log("Erreur remplissage")

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


import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareNewsService } from '../../services/shareNews/share-news.service';
import { Subscription } from 'rxjs';
import { News } from '../../interfaces/news.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-news',
  imports: [ReactiveFormsModule],
  templateUrl: './update-news.component.html',
  styleUrl: './update-news.component.css'
})
export class UpdateNewsComponent implements OnInit, OnDestroy {
  constructor(private service: ShareNewsService) { }

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

  }





  ngOnDestroy(): void {
    // Pour se désabonner
    this.subscription.unsubscribe()
  }



}

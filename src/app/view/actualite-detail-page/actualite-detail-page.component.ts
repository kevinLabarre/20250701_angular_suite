import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-actualite-detail-page',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './actualite-detail-page.component.html',
  styleUrl: './actualite-detail-page.component.css'
})
export class ActualiteDetailPageComponent {

  id: number = 0

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => this.id = params['id'])

  }

}

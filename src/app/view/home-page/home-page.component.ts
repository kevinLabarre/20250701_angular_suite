import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  inputValue: number = 0

  constructor(private router: Router) { }

  handleNavigate() {
    this.router.navigate(["actualites", this.inputValue])
  }

}

import { Routes } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { NewsPageComponent } from './view/news-page/news-page.component';
import { ActualiteDetailPageComponent } from './view/actualite-detail-page/actualite-detail-page.component';

export const routes: Routes = [
  { path: "", component: HomePageComponent, title: "Accueil" },
  { path: "actualites", component: NewsPageComponent, title: "Actualites" },
  { path: "actualites/:id", component: ActualiteDetailPageComponent, title: "détails de l'actualité" }

];

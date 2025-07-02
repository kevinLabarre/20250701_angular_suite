import { Routes } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { NewsPageComponent } from './view/news-page/news-page.component';
import { ActualiteDetailPageComponent } from './view/actualite-detail-page/actualite-detail-page.component';
import { NewsDescriptionComponent } from './components/news-description/news-description.component';
import { UpdateNewsComponent } from './components/update-news/update-news.component';

export const routes: Routes = [
  { path: "", component: HomePageComponent, title: "Accueil" },
  { path: "actualites", component: NewsPageComponent, title: "Actualites" },
  {
    path: "actualites/:id", component: ActualiteDetailPageComponent, title: "détails de l'actualité", children: [
      { path: "", redirectTo: "description", pathMatch: "full" }, // Rediriger vers 'actualites/:id/description'  quand on arrive sur 'actualites/:id'
      { path: "description", component: NewsDescriptionComponent },


      { path: "mise-a-jour", component: UpdateNewsComponent },
      { path: "update", redirectTo: "mise-a-jour" },

    ]
  }

];

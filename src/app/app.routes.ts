import { Routes } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { NewsPageComponent } from './view/news-page/news-page.component';
import { ActualiteDetailPageComponent } from './view/actualite-detail-page/actualite-detail-page.component';
import { NewsDescriptionComponent } from './components/news-description/news-description.component';
import { UpdateNewsComponent } from './components/update-news/update-news.component';
import { SignalPageComponent } from './view/signal-page/signal-page.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './admin/routes/admin.routes';
import { adminGuard } from './guards/admin.guard';
import { LoginPageComponent } from './view/login-page/login-page.component';
import { provideClientHydration } from '@angular/platform-browser';
import { ServerRoute } from '@angular/ssr';


export const routes: Routes = [
  { path: "", component: HomePageComponent, title: "Accueil" },
  { path: "actualites", component: NewsPageComponent, title: "Actualites" },
  // {
  //   path: "actualites/:id",
  //   component: ActualiteDetailPageComponent,
  //   title: "détails de l'actualité",
  //   children: [
  //     { path: "", redirectTo: "description", pathMatch: "full" }, // Rediriger vers 'actualites/:id/description'  quand on arrive sur 'actualites/:id'
  //     { path: "description", component: NewsDescriptionComponent },


  //     { path: "mise-a-jour", loadComponent: () => import("./components/update-news/update-news.component").then(e => e.UpdateNewsComponent) }, // Avec lazyLoading
  //     { path: "update", redirectTo: "mise-a-jour" }, // Exemple de redirection
  //   ]
  // },
  { path: 'signaux', component: SignalPageComponent, title: "Les signaux" },
  { path: 'connexion', component: LoginPageComponent, title: "Connexion" },


  // Espace admin
  {
    // Guard n'empêche le chargement des modules pour le SSR , mm si la route est bloqué
    path: 'admin',
    component: AdminLayoutComponent, // Sans lazy loading. Pour du lazy loading, utiliser 'loadComponent'
    loadChildren: () => import("./admin/routes/admin.routes").then(e => e.ADMIN_ROUTES),
    canMatch: [adminGuard]  // Avec lazyLoading
  },

  // Les guards : avec canMatch / canActivate
  // --> Peut empêcher le chargement paresseux(lazy loading) d'un module avant même que la correspondance de route
  // soit tentée

  { path: '**', component: HomePageComponent, title: "Page introuvable" }, // Page 404

];


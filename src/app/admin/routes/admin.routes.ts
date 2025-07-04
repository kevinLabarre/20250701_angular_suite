import { Routes } from "@angular/router";
import { AdminContactPageComponent } from "../view/admin-contact-page/admin-contact-page.component";
import { AdminHomePageComponent } from "../view/admin-home-page/admin-home-page.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminHomePageComponent,
    title: "Admin: page d'accueil"
  },
  {
    path: 'contact',
    component: AdminContactPageComponent,
    title: "Admin: contact"
  },
]

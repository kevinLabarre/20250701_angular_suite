import { DatePipe, isPlatformBrowser } from '@angular/common';
import { inject, Pipe, PipeTransform, PLATFORM_ID } from '@angular/core';

@Pipe({
  name: 'myCustomDate',
  standalone: true,
})
export class MyCustomDatePipe implements PipeTransform {

  // private datePipe = inject(DatePipe)
  constructor(private datePipe: DatePipe) { }

  platform = inject(PLATFORM_ID);


  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: string | number | Date): unknown {
    //  value est la valeur que l'on récupère du HTML, c'est cette valeur que l'on doit 'formater'
    // ...arg -> contient les paramètres de notre pipe . Element optionnel

    // A enlever sur un cas réél, ici si pas de token, on en enregistre
    if (isPlatformBrowser(this.platform)) {  // Ce qui est dans mon if, ne s'execute que sur le client (pas chargé par le SSR)
      if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "fr")
      }
    }

    const lang = localStorage.getItem("lang")

    if (lang) {
      return this.datePipe.transform(value, undefined, undefined, lang)
    } else return value;
  }

}

import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-page',
  imports: [],
  templateUrl: './signal-page.component.html',
  styleUrl: './signal-page.component.css'
})
export class SignalPageComponent {

  constructor() {
    effect(() => document.title = "mon compteur: " + this.count())
  }

  count: WritableSignal<number> = signal(0)
  // count: WritableSignal<number | undefined> = signal(undefined)

  // La valeur de countCarre ne sera recalculé que si un des 'signaux' utilisé pour le calcul de sa nouvelle valeur change
  countCarre = computed(() => this.count() * this.count())

  increment() {
    // A utiliser lorsque qu'on a besoin de connaitre la valeur du signal pour calculer la nouvelle valeur
    this.count.update((prev) => prev + 1)

    console.log(this.count());
  }

  reset() {
    this.count.set(0)
  }



}

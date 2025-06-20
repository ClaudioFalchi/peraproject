import { Component, OnInit } from '@angular/core';

interface Prodotto {
  nome: string;
  prezzo: number;
  quantita: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  carrello: Prodotto[] = []; // array di prodotti

  constructor() {}

  ngOnInit(): void {
    // Esempio: carica prodotti (da un servizio o localStorage)
    this.carrello = this.getProdottiCarrello(); // implementalo tu o mock
  }

  get totalPrice(): number {
    return this.carrello.reduce(
      (totale, prodotto) => totale + prodotto.prezzo * prodotto.quantita,
      0
    );
  }

  getProdottiCarrello(): Prodotto[] {
    // TODO: recupera i dati reali da un servizio o localStorage
    return []; // per ora vuoto
  }
}

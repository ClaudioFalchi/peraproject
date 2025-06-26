import { Component } from '@angular/core';

interface Product {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  availableQty: number;
  orderQty: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'] // anche se vuoto o rimosso
})
export class ShopComponent {
  products: Product[] = [
    {
      imageUrl: 'assets/images/Peraphone1-prodotti.png',
      title: 'PeraPhone Lite',
      description: `
        <ul>
          <li>Display 6.1" LCD</li>
          <li>Fotocamera 12 MP</li>
          <li>64 GB memoria interna</li>
          <li>Batteria 3000 mAh</li>
        </ul>
      `,
      price: 399.99,
      availableQty: 10,
      orderQty: 1
    },
    {
      imageUrl: 'assets/images/Peraphone2-prodotti.png',
      title: 'PeraPhone Air',
      description: `
        <ul>
          <li>Display 6.4" OLED</li>
          <li>Fotocamera 48 MP</li>
          <li>128 GB memoria interna</li>
          <li>Batteria 4000 mAh + ricarica rapida</li>
        </ul>
      `,
      price: 599.99,
      availableQty: 7,
      orderQty: 1
    },
    {
      imageUrl: 'assets/images/Peraphone3-prodotti.png',
      title: 'PeraPhone Pro',
      description: `
        <ul>
          <li>Display 6.7" AMOLED 120Hz</li>
          <li>Fotocamera 108 MP</li>
          <li>256 GB memoria interna</li>
          <li>Batteria 5000 mAh + ricarica wireless</li>
        </ul>
      `,
      price: 899.99,
      availableQty: 5,
      orderQty: 1
    },
    {
      imageUrl: 'assets/images/Perabuds2.png',
      title: 'PeraPods',
      description: `
        <ul>
          <li>Suono stereo HD</li>
          <li>Bluetooth 5.2</li>
          <li>Custodia di ricarica rapida</li>
          <li>Autonomia 24 ore</li>
        </ul>
      `,
      price: 79.99,
      availableQty: 15,
      orderQty: 1
    },
    {
      imageUrl: 'assets/images/PeraWatch2.png',
      title: 'PeraWatch',
      description: `
        <ul>
          <li>Display AMOLED 1.8"</li>
          <li>GPS + monitoraggio attività</li>
          <li>Impermeabile 5 ATM</li>
          <li>Autonomia 7 giorni</li>
        </ul>
      `,
      price: 199.99,
      availableQty: 12,
      orderQty: 1
    },
    {
      imageUrl: 'assets/images/Caricatore2.png',
      title: 'PeraCharger 65W',
      description: `
        <ul>
          <li>Ricarica ultra-rapida USB-C</li>
          <li>Compatibile con smartphone, tablet e laptop</li>
          <li>Design compatto e leggero</li>
        </ul>
      `,
      price: 49.99,
      availableQty: 25,
      orderQty: 1
    },
    {
      imageUrl: 'assets/images/Peraphones2.png',
      title: 'Perapods pro',
      description: `
        <ul>
          <li>Materiale in silicone premium</li>
          <li>Antiscivolo e antiurto</li>
          <li>Finitura morbida al tatto</li>
        </ul>
      `,
      price: 29.99,
      availableQty: 20,
      orderQty: 1
    }
  ];

  onBuy(product: Product) {
    if (product.orderQty > 0 && product.orderQty <= product.availableQty) {
      alert('Hai acquistato ${product.orderQty} di ${product.title}');
      product.availableQty -= product.orderQty;
      product.orderQty = 1; // reset input
    } else if (product.orderQty > product.availableQty) {
      alert(`Quantità non disponibile per ${product.title}`);
    } else {
      alert('Inserisci una quantità valida');
    }
  }
}
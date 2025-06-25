import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  images=[4]
  items = [
  { img: 'assets/images/Peraphone1.png', title: 'Peraphone lite', desc: 'Doppia fotocamera posteriore (principale da 12 MP + profondità da 2 MP), Flash LED, ricarica standard via USB-C (nessuna ricarica wireless), memoria di di archiviazione interna 64 GB e 4 GB di RAM' },
  { img: 'assets/images/Peraphone2.png', title: 'Peraphone pro', desc: 'Tripla fotocamera posteriore (principale 48 MP + ultra-grandangolare 8 MP + macro 2 MP), flash LED, supporta modalità notturna e video in 4K, ricarica rapida da 25W, memoria di archiviazione di 128 GB e 6 GB di RAM' },
  { img: 'assets/images/Peraphone3.png', title: 'Peraphone air', desc: 'Tripla fotocamera con sensore principale da 64 MP + ultra-grandangolare 12 MP + teleobiettivo 8 MP, registrazione video 8K, Ricarica rapida da 65W + ricarica wireless, memoria di archiviazione di 256 GB e 12GB di RAM' },
  { img: 'assets/images/Caricatore.png', title: 'Peracharger', desc: 'Da un lato si notano delle luci LED che indicano il livello di carica residua del dispositivo, dall altra sono visibili diverse porte USB. È l accessorio perfetto per chi è spesso in movimento e ha bisogno di una fonte di energia affidabile per non rimanere mai a corto di batteria.' },
  { img: 'assets/images/Perabuds.png', title: 'PeraPods', desc: 'La custodia ricarica gli auricolari quando non sono in uso. Questi PeraPods sono ideali per un esperienza di ascolto musicale senza l ingombro dei fili, per effettuare chiamate in vivavoce o per interagire con assistenti vocali, offrendo massima libertà di movimento.' },
  { img: 'assets/images/Perawatch.png', title: 'PeraWatch', desc: 'Uno smartwatch dal design moderno e funzionale. Questo PeraWatch è un compagno ideale per chi desidera tenere sotto controllo la propria salute e il fitness, oltre a ricevere notifiche e gestire alcune funzioni dello smartphone direttamente dal polso.' },
  { img: 'assets/images/Peraphones.png', title: 'PeraPods Pro', desc: 'Questo tipo di cuffie è progettato per offrire un esperienza audio più immersiva e avvolgente, spesso con una migliore isolamento dal rumore esterno, rendendole perfette per gli amanti della musica, per i viaggi o per concentrarsi in ambienti rumorosi.' }
];
isTextCentered: any;
}
export class ShopComponent {
  prodotti = [
    {
      nome: "Peraphone Ultra X",
      produttore: "Peraphone Inc.",
      immagine: "https://www.dropbox.com/scl/fi/cpwcdkh62qweit0zicwov/Immagine-WhatsApp-2025-06-20-ore-14.36.24_e9a74c0d.jpg?rlkey=ms3krct43b4atw3wfsm4o3sht&raw=1",
      costo: 1299,
      quantitaInStock: 25,
      descrizione: `Prestazioni da top di gamma, IA adattiva, design premium in vetro e alluminio, 
      fotocamera da 200MP con tecnologia LightSense Pro, schermo AMOLED HDR a 144Hz, 
      audio surround 3D e batteria a lunga durata. Il futuro è qui.`
    }
  ];
}

package com.marconi.peraphone_marconi.init;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.math.BigDecimal;
import com.marconi.peraphone_marconi.entity.Product;
import com.marconi.peraphone_marconi.repository.ProductRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) {
        if (productRepository.count() == 0) {
            productRepository.saveAll(List.of(
                    new Product(null, "PeraPhone Lite", "Display 6.1\" LCD, Fotocamera 12 MP, 64 GB memoria interna, Batteria 3000 mAh", BigDecimal.valueOf(399.99), "assets/images/Peraphone1-prodotti.png"),
                    new Product(null, "PeraPhone Air", "Display 6.4\" OLED, Fotocamera 48 MP, 128 GB memoria interna, Batteria 4000 mAh + ricarica rapida", BigDecimal.valueOf(599.99), "assets/images/Peraphone2-prodotti.png"),
                    new Product(null, "PeraPhone Pro", "Display 6.7\" AMOLED 120Hz, Fotocamera 108 MP, 256 GB memoria interna, Batteria 5000 mAh + ricarica wireless", BigDecimal.valueOf(899.99), "assets/images/Peraphone3-prodotti.png"),
                    new Product(null, "PeraPods", "Suono stereo HD, Bluetooth 5.2, Custodia di ricarica rapida, Autonomia 24 ore", BigDecimal.valueOf(79.99), "assets/images/Perabuds2.png"),
                    new Product(null, "PeraWatch", "Display AMOLED 1.8\", GPS + monitoraggio attività, Impermeabile 5 ATM, Autonomia 7 giorni", BigDecimal.valueOf(199.99), "assets/images/PeraWatch2.png"),
                    new Product(null, "PeraCharger 65W", "Ricarica ultra-rapida USB-C, Compatibile con smartphone, tablet e laptop, Design compatto e leggero", BigDecimal.valueOf(49.99), "assets/images/Caricatore2.png"),
                    new Product(null, "Perapods pro", "Materiale in silicone premium, Antiscivolo e antiurto, Finitura morbida al tatto", BigDecimal.valueOf(29.99), "assets/images/Peraphones2.png")
            ));
        }
    }
}
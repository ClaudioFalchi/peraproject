import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmOrdineComponent } from './confirm-ordine/confirm-ordine.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect root a /home
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'conferma-ordine', component: ConfirmOrdineComponent },
  { path: 'shop', component: ShopComponent },


  // Wildcard: qualsiasi altro percorso redirect a /home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

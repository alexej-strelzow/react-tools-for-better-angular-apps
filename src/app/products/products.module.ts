import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';

// guards
import * as fromGuards from './guards';
// services
import * as fromServices from './services';
// stateless components
import * as fromComponents from './components';

export const ROUTES: Routes = [
  {
    path: '',
    // canActivate: [fromGuards.PizzasGuard],
    component: ProductsComponent,
  },
  {
    path: 'new',
    //   canActivate: [fromGuards.PizzasGuard, fromGuards.ToppingsGuard],
    component: ProductItemComponent,
  },
  {
    path: ':pizzaId',
    //   canActivate: [fromGuards.PizzaExistsGuards, fromGuards.ToppingsGuard],
    component: ProductItemComponent,
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
  providers: [...fromServices.services, ...fromGuards.guards],
  declarations: [ProductsComponent, ProductItemComponent, ...fromComponents.components],
})
export class ProductsModule {}

import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{
  path: 'products',
  // canActivate:[AuthGuard],
  children: [
    {path: '', component: ProductsComponent},
    {path: ':id', component: ProductDetailsComponent},
    {path: ':id/edit', component: ProductEditComponent}
]
}
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ProductModule { }

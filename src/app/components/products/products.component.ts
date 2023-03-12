import { Router } from '@angular/router';
import { productsList } from '../../models/productsList';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Iproduct[] = productsList;
  allProduct:any = [];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      {
        next:(response)=>{this.allProduct=response;},
        error:(error)=>{console.log(error);}
      }
    //   (response)=>{
    //   this.allProduct = response;
    // }
    );
  }
  deleteProduct(productId:number){
    this.productService.deleteProduct(productId).subscribe({
      next:(response)=>{
        this.allProduct = this.allProduct.filter((product:any) => product.id != productId);
      },
    })
  }
}

import { Iproduct } from './../../models/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId:number = 0;
  product:any | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router:Router
    ){
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.productId);
  }
  ngOnInit(): void {
    if(this.productId){
      this.productService.getProductById(this.productId).subscribe({
        next:(response)=>{
          this.product=response;
        },
        error:(error)=>{
          console.log(error);
        }
      });
    }else{
      this.router.navigate(['/products'])
    }
    // console.log(this.product);
  }
  }

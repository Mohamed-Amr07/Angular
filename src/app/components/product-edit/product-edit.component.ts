import { ProductService } from './../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number = 0;
  product:any;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private router:Router){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      this.productForm.controls['productName'].setValue('');
      this.productForm.controls['productPrice'].setValue('');
      this.productForm.controls['productQuantity'].setValue('');
    })
    // this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.productId);
  }
  ngOnInit(): void {
    if(this.productId != 0){
      this.productService.getProductById(this.productId).subscribe({
        next:(response)=>{this.product=response;
        this.productForm.controls['productName'].setValue(this.product.productName);
        this.productForm.controls['productPrice'].setValue(this.product.price);
        this.productForm.controls['productQuantity'].setValue(this.product.quantity);
        },
      });
    }
  }

  productForm = new FormGroup({
    productName : new FormControl('Default Name'),
    productPrice : new FormControl('Default Price'),
    productQuantity : new FormControl(),
    productImage : new FormControl(),
  })
  submitForm(e:any){
    e.preventDefault();
    if(this.productForm.status=='VALID'){
      if(this.productId == 0){
        this.productService.addProduct(this.productForm.value).subscribe();
      }else{
        this.productService.editProduct(this.productId,this.productForm.value).subscribe({
          next: (response)=> {
          },
        })
      }
      this.router.navigate(['/products']);

    }
    console.log(this.productForm);
  }
}

import { productsList } from './../models/productsList';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
baseUrl:string = 'http://localhost:3005/products';
getAllProduct(){
  const testData = this.http.get(this.baseUrl);
  console.log(testData);
  return testData;
}
  // getAllProduct():Iproduct[]{
  //   return productsList;
  // }
  getProductById(productId:number){
    return this.http.get(`${this.baseUrl}/${productId}`);
  }
  // getProductById(productId:number):Iproduct{
  //   return productsList.filter((product) => product.id == productId)[0];
  // }
  addProduct(product:any){
    return this.http.post(this.baseUrl,product);
  }
  editProduct(productId:any,product:any){
    return this.http.put(`${this.baseUrl}/${productId}`,product);
  }
  deleteProduct(productId:number){
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}

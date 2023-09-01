import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getProductsList(){
   return this.http.get('https://fakestoreapi.com/products')
  }
  getProductsbyId(id:any){
   return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../service/products.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos_idx: any = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsIdx()
      .subscribe((resp:any) =>{

        this.productos_idx = resp;
      });
  } 

}

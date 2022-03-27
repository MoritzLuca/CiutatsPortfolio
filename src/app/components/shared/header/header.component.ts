import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  buscarTexto(texto:string){
    if (texto.length >=3) {
      this.route.navigate(['buscar',texto]);
    }else{
      alert('Cantidad Minima de caracteres para realizar la busqueda es de 3')
    }
    
  }
  resertBusqueda(){
this.route.navigate(['home']);

  }

}

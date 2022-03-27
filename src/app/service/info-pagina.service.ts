import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http:HttpClient) { }

   getInfoPagina(){
    return this.http.get('assets/data/infoPagina.json');
  }
    getInfoEquipo(){
      return this.http.get('https://prova-classe-3deb4-default-rtdb.europe-west1.firebasedatabase.app/equipo.json');
    }
    getInfoEquipo2(){
      return this.http.get('https://prova-classe-3deb4-default-rtdb.europe-west1.firebasedatabase.app/equipo.json');
    }


}

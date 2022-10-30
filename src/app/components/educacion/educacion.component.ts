import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
//import { PortfolioService } from 'src/app/service/portfolio.service';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //educacionList:any;
  //constructor(private datosPortfolio:PortfolioService) { }
  educacion: Educacion [] = [];
  constructor(private educacionS: SEducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    /*
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.educacionList=data.education;
    })
    */
   this.cargarEducacion();
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }else{
    this.isLogged = false;
   }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  borrar(id?: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}

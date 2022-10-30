import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
/*
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.experienciaList=data.experience;
    })
  }

}
*/

export class ExperienciaComponent implements OnInit {
  expe: Experiencia [] = [];
  
  constructor(private sExperiencia: SExperienciaService , private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      }, err => {
        alert("Error al eliminar experiencia");
      })
    }
  }
}


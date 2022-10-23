import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
//import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Se creo con video AP-> 
  //miPortfolio:any;
  //constructor(private datosPortfolio:PortfolioService) { }
  //ngOnInit(): void {
    //this.datosPortfolio.obtenerDatos().subscribe(data=>{
      //console.log(data);
      //this.miPortfolio=data;
    //});
  //}

  persona: persona=new persona('','','');

  constructor (public personaService: PersonaService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona=data})
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
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
  //Antes del Login
  /*
  persona: persona=new persona('','','');
  constructor (public personaService: PersonaService) { }
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona=data})
  }
 */
  persona: persona = new persona("","","");
  //Probamos con el login
  isLogged = false;
  constructor (public personaService: PersonaService, private router:Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    //suscribe es un metodo que escucha, detecta.
    this.personaService.getPersona().subscribe(data => {
      this.persona = data
      console.log("Estamos en Data "+ data);
    })
    if(this.tokenService.getToken()){
      this.isLogged=true;
      console.log("Token activado");
    }else{
      this.isLogged=false;
      console.log("Token desactivado");
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  
}

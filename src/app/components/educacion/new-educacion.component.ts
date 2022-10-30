import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  tituloE: string;
  institutoE: string;
  lugarE: string;
  fechaE: string;

  constructor(private educacionS: SEducacionService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const educacion = new Educacion(this.tituloE, this.institutoE, this.lugarE, this.fechaE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Datos de Educación agregada");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al cargar los datos de Educación");
        this.router.navigate(['']);
      }
    )
  }

}

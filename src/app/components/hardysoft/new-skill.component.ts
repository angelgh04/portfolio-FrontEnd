import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  colorOuter: string;
  colorInner: string;
  imagSrc: string;

  constructor(private skillS: SSkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.colorOuter, this.colorInner, this.imagSrc);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creado");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló al añadir skill");
        this.router.navigate(['']);
      }
    )
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hardysoft/edit-skill.component';
import { NewSkillComponent } from './components/hardysoft/new-skill.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

//Especificamos las rutas de nuestra aplicación.
//portfolio sería cómo la Home del tutorial
const routes: Routes = [
  //{path:'portfolio',component:PortfolioComponent},
  //{path:'login',component:LoginComponent},
  //{path:'',redirectTo:'login',pathMatch:'full'}

  {path:'', component: PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editheader/:id', component: EditHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

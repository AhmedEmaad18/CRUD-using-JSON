import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodosComponent } from './components/todos/todos.component';

export const routes: Routes = [
  {path :'',redirectTo:'/todos',pathMatch:"full"},
  {path :'home',component:HomeComponent},
  {path :'details',component:DetailsComponent},
  {path:'todos/:id',component:DetailsComponent},
  {path :'contactus',component:ContactusComponent},
  {path :'todos',component:TodosComponent},
  {path :'aboutus',component:AboutusComponent},
  {path :'todo',component:TodolistComponent},
  {path :'**',component:NotFoundComponent}






];

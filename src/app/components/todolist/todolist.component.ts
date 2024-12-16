import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-todolist',
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
image:string="https://th.bing.com/th/id/OIP.qNvW0oMkWlOaf4nKKbD7nwHaHa?rs=1&pid=ImgDetMain";
tasks:string[]=[];
newtask:string="";
istrue:boolean=false;
Addtask(){
  if(this.newtask!==""){
    this.tasks.push(this.newtask);
    this.istrue=true;
  }
  console.log(this.newtask);
  this.newtask='';

}

edittask(index:number,newa:string):void|string{
if(newa.trim() !==""){
this.tasks[index]=newa;

}
else{
  newa=this.tasks[index];
  return this.newtask=newa;
}
this.newtask="";
}
removetask(index:number){
  this.tasks.splice(index,1)
  if(this.tasks.length==0){
    this.istrue=false;
  }

}
// Add this method in your component
trackByFn(index: number, task: string) {
  return index; // or return task.id if you have a unique identifier
}
}

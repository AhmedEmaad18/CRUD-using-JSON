import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { TodoService } from '../../Services/todo.service';
import { todo } from '../../Models/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-details',
  imports: [FormsModule,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  todo: todo | undefined;
  image:string="data:image/png;base64,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";
  constructor(
    private route: ActivatedRoute,
    private todoservice: TodoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoservice.getbyid(id).subscribe({
        next: (todo) => {
          this.todo = todo;
        },
        error: (error) => {
          console.error('Error fetching todo:', error);
        }
      });
    }
  }

  updateTodo() {
    if (this.todo) {
      this.todoservice.updatetodo(this.todo).subscribe({
        next: () => {
          console.log('Todo updated successfully');
          this.router.navigate(['/todos']); // Navigate back after update
        },
        error: (error) => {
          console.error('Error updating todo:', error);
        }
      });
    }
  }
}

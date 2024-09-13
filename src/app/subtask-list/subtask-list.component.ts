import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.scss'],
})
export class SubtaskListComponent {
  tasks = [
    { name: 'Send invoice to collections agency', completed: false },
    { name: 'Write an email to them to follow-up', completed: false },
    { name: 'Send paper mail to account', completed: false },
    {
      name: 'This is my new subtask... I’m autofocused here when I add a subtask',
      completed: false,
    },
  ];

  newTask = '';
  showInput = false;
  editIndex: number | null = null;

  @ViewChild('newTaskInput') newTaskInput!: ElementRef<HTMLInputElement>;

  displayInput() {
    this.showInput = true;
    setTimeout(() => this.newTaskInput.nativeElement.focus(), 0);
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = '';
      this.showInput = false;
    }
  }

  toggleCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  editTask(index: number) {
    this.editIndex = index;
  }

  updateTask(index: number) {
    this.editIndex = null;
  }

  get completedTasks() {
    return this.tasks.filter((task) => task.completed).length;
  }

  get taskProgress() {
    return (this.completedTasks / this.tasks.length) * 100;
  }

  get taskCountText() {
    return `${this.completedTasks}/${this.tasks.length}`;
  }

  isLastTask(index: number): boolean {
    return index === this.tasks.length - 1;
  }

  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }
}

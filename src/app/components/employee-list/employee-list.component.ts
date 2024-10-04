import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: string[] = [];
  newEmployeeName: string = '';

  addEmployee() {
    if (this.newEmployeeName.trim()) {
      this.employees.push(this.newEmployeeName.trim());
      this.newEmployeeName = ''; // Clear input after adding
    }
  }

  removeEmployee(index: number) {
    this.employees.splice(index, 1);
  }
}

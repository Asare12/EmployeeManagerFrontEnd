<<<<<<< HEAD
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
=======
import { Component } from '@angular/core';
>>>>>>> bee2689... initial commit

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit{
  public employees: Employee[] = [];
  public editEmployee: Employee | undefined;
  public deleteEmployee: Employee | undefined;
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddEmployee(addForm: NgForm): void{
    document.getElementById('add-employee-form')?.click;
    this.employeeService.addEmployees(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    ); 
  }

  public onUpdateEmployee(employee: Employee): void{
    //document.getElementById('add-employee-form')?.click;
    this.employeeService.updateEmployees(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    ); 
  }

  public onDeleteEmployee(employeeId: number): void{
    //document.getElementById('add-employee-form')?.click;
    this.employeeService.deleteEmployees(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
        
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    ); 
  }

  public searchEmployee(key: string): void{
    console.log(key);
    const results: Employee[] = [];

    for(const employee of this.employees){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(employee);
      }
    }
    this.employees = results;

    if(results.length === 0 || !key){
      this.getEmployees();
    }
  }

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    switch(mode){
      case 'add':
        console.log(mode);
        button.setAttribute('data-target', '#addEmployeeModalLabel');
        break;

      case 'edit':
        console.log(mode);
        this.editEmployee = employee;
        button.setAttribute('data-target', '#updateEmployeeModalLabel');
        break;

      case 'delete':
        this.deleteEmployee = employee;
        button.setAttribute('data-target', '#deleteEmployeeModalLabel');
        break;
    }

    container?.appendChild(button);
    button.click();
  }
=======
export class AppComponent {
  title = 'EmployeeManagerApp';
>>>>>>> bee2689... initial commit
}

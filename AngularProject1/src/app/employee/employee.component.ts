import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']

})
export class EmployeeComponent {
  colSpan: number = 2;
  name: string = "Pan";
  lastName: string = "Jello";
  gender: string = "Male";
  age: number = 20;
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

}




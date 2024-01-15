import { Component } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})

export class EmployeeListComponent {
  employees: any[] = [
    { code: 'emp101', name: 'Tom', gender: "Male", annualSalary: 5500, dob: "none" },
        { code: 'emp101', name: 'Tom', gender: "Male", annualSalary: 5500, dob: "none" },
            { code: 'emp101', name: 'Tom', gender: "Male", annualSalary: 5500, dob: "none" },
                { code: 'emp101', name: 'Tom', gender: "Male", annualSalary: 5500, dob: "none" }
  ];
}



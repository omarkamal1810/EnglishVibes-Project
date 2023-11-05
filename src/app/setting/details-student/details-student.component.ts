import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';


@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  DetailsStudent: any;
  constructor(private _AdminService: AdminService) { }
  ngOnInit(): void {
    this._AdminService.getDetailsStudent().subscribe({
      next: (response) => {
        console.log(response)
        this.DetailsStudent = response;
      }
    })
  }

}
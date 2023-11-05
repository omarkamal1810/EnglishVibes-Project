import { Component ,OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instructors-details',
  templateUrl: './instructors-details.component.html',
  styleUrls: ['./instructors-details.component.css']
})


export class InstructorsDetailsComponent implements OnInit {
  allinstrutorsid: any;
  instructorId: any;

  constructor(private _AdminService: AdminService, private _ActivatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param) => {
      this.instructorId = param.get('id');
    })
    this._AdminService.getinstructorsid(this.instructorId).subscribe({
      next: (response) => {
        console.log(response)
        this.allinstrutorsid = response;
      }
    })
  }

}










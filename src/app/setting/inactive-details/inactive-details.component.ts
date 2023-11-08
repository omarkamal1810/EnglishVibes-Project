import { Component } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inactive-details',
  templateUrl: './inactive-details.component.html',
  styleUrls: ['./inactive-details.component.css']
})
export class InactiveDetailsComponent {
  groupId: any;
  group: any;
  groupform: FormGroup;
  dayOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  currentDate = new Date();

  year = this.currentDate.getFullYear();
  month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0');
  day = this.currentDate.getDate().toString().padStart(2, '0');
  formattedDate = `${this.year}-${this.month}-${this.day}`
  constructor(private _AdminService: AdminService, private _ActivatedRoute: ActivatedRoute, private _FormBuilder: FormBuilder) {
    this.groupform = _FormBuilder.group({
      id: [null, [Validators.required]],
      StartDate: [null, [Validators.required,]],
      instructorId: [null, [Validators.required]],
      TimeSlot: [null, [Validators.required]],
      d1: [null, [Validators.required]],
      d2: [null, [Validators.required]]
    })
  }
  // [Validators.required]
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param) => {
      this.groupId = param.get('id');
    })
    this._AdminService.getInActiveGroupById(this.groupId).subscribe({
      next: (response) => {
        this.group = response;
        console.log(this.group)
      }
    })
  }


  sendGroup(formData: FormGroup) {
    console.log(this.groupId)
    console.log(formData.value)
    this._AdminService.generateInActiveGroup(this.groupId, formData.value).subscribe({
      next: (respone) => {
        console.log(respone);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  get StartDate() {
    return this.groupform.get('StartDate')
  }
  get TimeSlot() {
    return this.groupform.get('TimeSlot')
  }
  get instructorId() {
    return this.groupform.get('instructorId')
  }
  get d1() {
    return this.groupform.get('d1')
  }
  get d2() {
    return this.groupform.get('d2')
  }
}

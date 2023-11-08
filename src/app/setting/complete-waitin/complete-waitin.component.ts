import { Component } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-waitin',
  templateUrl: './complete-waitin.component.html',
  styleUrls: ['./complete-waitin.component.css']
})
export class CompleteWaitinComponent {

waitId :any;
wait :any;
waitform: FormGroup;

dayOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

currentDate = new Date();

year = this.currentDate.getFullYear();
month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0');
day = this.currentDate.getDate().toString().padStart(2, '0');
formattedDate = `${this.year}-${this.month}-${this.day}`

constructor(private _AdminService: AdminService, private _ActivatedRoute: ActivatedRoute, private _FormBuilder: FormBuilder) {
  this.waitform = _FormBuilder.group({
    id: [null, [Validators.required]],
    StartDate: [null, [Validators.required,]],
    instructorId: [null, [Validators.required]],
    TimeSlot: [null, [Validators.required]],
    d1: [null, [Validators.required]],
    d2: [null, [Validators.required]]
  })
}



ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((param) => {
    this.waitId = param.get('id');
  })
  this._AdminService.getInActiveGroupById(this.waitId).subscribe({
    next: (response) => {
      this.wait = response;
      console.log(this.wait)
    }
  })
}

sendGroup(formData: FormGroup) {
  console.log(this.waitId)
  console.log(formData.value)
  this._AdminService.generateInActiveGroup(this.waitId, formData.value).subscribe({
    next: (respone) => {
      console.log(respone);
    },
    error: (error) => {
      console.log(error)
    }
  })
}


get StartDate() {
  return this.waitform.get('StartDate')
}
get TimeSlot() {
  return this.waitform.get('TimeSlot')
}
get instructorId() {
  return this.waitform.get('instructorId')
}
get d1() {
  return this.waitform.get('d1')
}
get d2() {
  return this.waitform.get('d2')
}





}

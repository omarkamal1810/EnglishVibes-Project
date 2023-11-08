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

  waitId: any;
  wait: any;
  waitform: FormGroup;

  dayOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  currentDate = new Date();

  year = this.currentDate.getFullYear();
  month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0');
  day = this.currentDate.getDate().toString().padStart(2, '0');
  formattedDate = `${this.year}-${this.month}-${this.day}`

  constructor(private _AdminService: AdminService, private _ActivatedRoute: ActivatedRoute, private _FormBuilder: FormBuilder) {
    this.waitform = _FormBuilder.group({
      level: [null, [Validators.required,]],
      payedAmount: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param) => {
      this.waitId = param.get('id');
      console.log(this.waitId)
    })
  }

  sendStudent(formData: FormGroup) {
    console.log(formData.value)
    this._AdminService.generateInActiveStudent(this.waitId, formData.value).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }


  get level() {
    return this.waitform.get('level')
  }
  get payedAmount() {
    return this.waitform.get('payedAmount')
  }






}

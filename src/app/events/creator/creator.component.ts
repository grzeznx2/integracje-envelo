import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent implements OnInit {
  public step = 1;
  public firstForm!: FormGroup;
  public secondForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this._createFirstForm();
    this._createSecondForm();
    this.firstForm.valueChanges.subscribe(console.log);
  }

  firstFormSubmit() {
    if (this.firstForm.valid) {
      this.nextStep();
    }
  }

  nextStep() {
    this.step++;
  }

  private _createFirstForm() {
    this.firstForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
    });
  }

  private _createSecondForm() {
    this.secondForm = this.fb.group({
      city: ['', Validators.required],
      placeName: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      localNumber: ['', Validators.required],
      postcode: ['', Validators.required],
    });
  }
}

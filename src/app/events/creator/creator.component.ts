import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent implements OnInit {
  public firstForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this._createFirstForm();
  }

  private _createFirstForm() {
    this.firstForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
    });
  }
}

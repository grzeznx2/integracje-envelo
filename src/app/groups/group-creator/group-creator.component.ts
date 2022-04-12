import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-creator',
  templateUrl: './group-creator.component.html',
  styleUrls: ['./group-creator.component.scss'],
})
export class GroupCreatorComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
}

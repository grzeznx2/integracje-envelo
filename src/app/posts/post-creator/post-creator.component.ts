import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss'],
})
export class PostCreatorComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this._initializeForm();
  }

  private _initializeForm() {
    this.form = this.fb.group({
      description: ['', [Validators.required]],
    });
  }
}

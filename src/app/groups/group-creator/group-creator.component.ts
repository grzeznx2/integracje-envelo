import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-group-creator',
  templateUrl: './group-creator.component.html',
  styleUrls: ['./group-creator.component.scss'],
})
export class GroupCreatorComponent implements OnInit {
  public form!: FormGroup;
  public userSearch: FormControl = new FormControl('');

  constructor(private fb: FormBuilder, private userSerive: UserService) {}

  ngOnInit(): void {
    this._createForm();
    this.userSearch.valueChanges.pipe(debounceTime(300)).subscribe(console.log);
  }

  private _createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
}

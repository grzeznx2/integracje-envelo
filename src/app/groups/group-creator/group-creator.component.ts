import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, Observable, of } from 'rxjs';
import { User } from 'src/app/users/models/user.model';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-group-creator',
  templateUrl: './group-creator.component.html',
  styleUrls: ['./group-creator.component.scss'],
})
export class GroupCreatorComponent implements OnInit {
  public form!: FormGroup;
  public userSearch: FormControl = new FormControl('');
  public users$: Observable<User[]> = of([]);
  public selectedUsers: User[] = [];

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this._createForm();
    this.users$ = this.userService.users;
    this.userSearch.valueChanges
      .pipe(debounceTime(300))
      .subscribe(() => this.searchUsers());
  }

  searchUsers() {
    this.userService.getUsersBySecondName(this.userSearch.value);
  }

  selectUser(user: User) {
    this.selectedUsers = [...this.selectedUsers, user];
  }

  private _createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
}

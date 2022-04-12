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
import { GroupService } from '../group.service';

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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private groupService: GroupService
  ) {}

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
    const userExists = this.selectedUsers.find(
      (searchedUser) => searchedUser === user
    );
    if (userExists) return;
    this.selectedUsers = [...this.selectedUsers, user];
  }

  removeUser(id: number) {
    this.selectedUsers = this.selectedUsers.filter((user) => user.id !== id);
  }

  createGroup() {
    const userIds = this.selectedUsers.map((user) => user.id);
    this.groupService.createGroup({
      name: this.form.controls['name'].value,
      userIds,
    });
  }

  private _createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
}

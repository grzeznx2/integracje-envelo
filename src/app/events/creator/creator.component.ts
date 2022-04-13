import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { GroupService } from 'src/app/groups/group.service';
import { Group } from 'src/app/groups/models/group.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent implements OnInit {
  public step = 1;
  public firstForm!: FormGroup;
  public secondForm!: FormGroup;
  public thirdForm!: FormGroup;
  public groups$: Observable<Group[]> = of([]);
  public selectedGroups: Group[] = [];

  constructor(
    private fb: FormBuilder,
    private groupService: GroupService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this._createFirstForm();
    this._createSecondForm();
    this._createThirdForm();
    this.groupService.init();
    this.groups$ = this.groupService.groups;
  }

  addGroup(group: Group) {
    const groupExist = this.selectedGroups.find(
      (searchedGroup) => searchedGroup === group
    );
    if (groupExist) return;
    this.selectedGroups = [...this.selectedGroups, group];
  }

  removeGroup(group: Group) {
    this.selectedGroups = this.selectedGroups.filter(
      (filteredGroup) => filteredGroup !== group
    );
  }

  firstFormSubmit() {
    if (this.firstForm.valid) {
      this.nextStep();
    }
  }

  secondFormSubmit() {
    if (this.secondForm.valid) {
      this.nextStep();
    }
  }

  thirdFormSubmit() {
    const obj: { [key: string]: any } = {};
    Object.keys(this.firstForm.value).forEach((key) => {
      obj[key] = this.firstForm.value[key];
    });
    obj['eventPlace'] = { ...this.secondForm.value };
    // Object.keys(this.secondForm.value).forEach((key) => {
    //   obj[key] = this.secondForm.value[key];
    // });
    Object.keys(this.thirdForm.value).forEach((key) => {
      obj[key] = this.thirdForm.value[key];
    });
    obj['selectedGroups'] = this.selectedGroups;
    obj['status'] = 'ACTIVE';
    obj['decision'] = 'NOT DECIDED';
    this.eventService.createEvent(obj);
  }

  nextStep() {
    this.step++;
  }

  private _createFirstForm() {
    this.firstForm = this.fb.group({
      title: ['', Validators.required],
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

  private _createThirdForm() {
    this.thirdForm = this.fb.group({
      minMembers: [],
      maxMembers: [],
      deadlineDecision: [],
    });
  }
}

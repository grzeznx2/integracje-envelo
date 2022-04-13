import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input() data!: any[];
  @Input() field!: string;
  @Output() selectedItemEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  selectItem(item: any) {
    this.selectedItemEvent.emit(item);
  }
}

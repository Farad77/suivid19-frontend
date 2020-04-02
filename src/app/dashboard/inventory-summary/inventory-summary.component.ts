import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inventory-summary',
  templateUrl: './inventory-summary.component.html',
  styleUrls: ['./inventory-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventorySummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

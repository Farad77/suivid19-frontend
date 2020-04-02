import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sales-activity',
  templateUrl: './sales-activity.component.html',
  styleUrls: ['./sales-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesActivityComponent implements OnInit {
  data =   {
    "name": "Score",
    "data": [
      [
        "Mon",
        10
      ],
      [
        "Tue",
        52
      ],
      [
        "Wed",
        200
      ],
      [
        "Thu",
        334
      ],
      [
        "Fri",
        390
      ],
      [
        "Sat",
        330
      ],
      [
        "Sun",
        220
      ]
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

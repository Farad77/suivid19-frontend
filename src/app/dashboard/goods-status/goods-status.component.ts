import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-goods-status',
  templateUrl: './goods-status.component.html',
  styleUrls: ['./goods-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsStatusComponent implements OnInit {
  data =   {
    "name": "Countries",
    "data": [
      {
        "value": 335,
        "name": "Germany"
      },
      {
        "value": 310,
        "name": "France"
      },
      {
        "value": 234,
        "name": "Canada"
      },
      {
        "value": 135,
        "name": "Russia"
      },
      {
        "value": 758,
        "name": "USA"
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

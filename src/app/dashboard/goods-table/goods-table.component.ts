import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsTableComponent implements OnInit {
  settings =   {
    "columns": {
      "id": {
        "title": "ID",
        "filter": false
      },
      "channel": {
        "title": "Channel",
        "filter": false
      },
      "draft": {
        "title": "Draft",
        "filter": false
      },
      "confirmed": {
        "title": "Confirmed",
        "filter": false
      },
      "shipped": {
        "title": "Shipped",
        "filter": false
      },
      "delivered": {
        "title": "Delivered",
        "filter": false
      }
    },
    "delete": {
      "confirmDelete": true
    },
    "add": {
      "confirmCreate": true
    },
    "edit": {
      "confirmSave": true
    },
    "actions": {
      "add": false,
      "edit": false,
      "delete": true
    }
  };
  source =   [
    {
      "id": 1,
      "channel": "Channel 1",
      "draft": "35",
      "confirmed": "55",
      "shipped": "50",
      "delivered": "355"
    },
    {
      "id": 2,
      "channel": "Channel 2",
      "draft": "34",
      "confirmed": "754",
      "shipped": "34",
      "delivered": "545"
    },
    {
      "id": 3,
      "channel": "Channel 3",
      "draft": "893",
      "confirmed": "35",
      "shipped": "35",
      "delivered": "355"
    },
    {
      "id": "5",
      "channel": "Channel 1",
      "draft": "43",
      "confirmed": "34",
      "shipped": "53",
      "delivered": "543"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

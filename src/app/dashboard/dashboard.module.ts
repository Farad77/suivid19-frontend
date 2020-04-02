import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { Space13Component } from './space13/space13.component';
import { Space17Component } from './space17/space17.component';
import { ReceiptsDue1Component } from './receipts-due1/receipts-due1.component';
import { ItemsRecived1Component } from './items-recived1/items-recived1.component';
import { PickingList1Component } from './picking-list1/picking-list1.component';
import { TotalToPick1Component } from './total-to-pick1/total-to-pick1.component';
import { InventorySummaryComponent } from './inventory-summary/inventory-summary.component';
import { Card11132Component } from './card11132/card11132.component';
import { Card111322Component } from './card111322/card111322.component';
import { Card111323Component } from './card111323/card111323.component';
import { GoodsStatusComponent } from './goods-status/goods-status.component';
import { GoodsTableComponent } from './goods-table/goods-table.component';
import { SalesActivityComponent } from './sales-activity/sales-activity.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, Space13Component, Space17Component, ReceiptsDue1Component, ItemsRecived1Component, PickingList1Component, TotalToPick1Component, InventorySummaryComponent, Card11132Component, Card111322Component, Card111323Component, GoodsStatusComponent, GoodsTableComponent, SalesActivityComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

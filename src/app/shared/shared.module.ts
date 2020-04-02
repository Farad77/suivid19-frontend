import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbTooltipModule, NbInputModule } from '@nebular/theme';
import { PieChartComponent } from './components/pie-chart.component';
import { EchartsDirective } from './directives/echarts.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { SmartTableComponent } from './components/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BarChartComponent } from './components/bar-chart.component';

@NgModule({
  declarations: [PieChartComponent, EchartsDirective, SmartTableComponent, BarChartComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgxEchartsModule,
    NbButtonModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbTooltipModule,
    NbInputModule
  ],
  exports: [NbCardModule, PieChartComponent, EchartsDirective, NgxEchartsModule, NbButtonModule, NbIconModule, SmartTableComponent, Ng2SmartTableModule, NbTooltipModule, BarChartComponent, NbInputModule]
})
export class SharedModule { }

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ECharts } from 'echarts';

import SeriesBar = echarts.EChartOption.SeriesBar;


@Component({
  selector: 'app-bar-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart' },
  template: `
      <div echarts [options]="options"></div>
  `,
})
export class BarChartComponent implements OnInit, OnDestroy {

  @Input() set data(data: SeriesBar) {
    this._data = data;
    this.updateOptions();
  }

  options: any = {};

  private _data: SeriesBar;
  private colorConfig: any = {};
  private echartsIntance: ECharts;
  private destroyed$: Subject<void> = new Subject();

  constructor(
    private theme: NbThemeService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.theme.getJsTheme()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((config: NbJSThemeOptions) => {
        this.colorConfig = config.variables.charts;
        this.updateOptions();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  onChartInit(ec: ECharts) {
    this.echartsIntance = ec;
  }

  private updateOptions() {

    if (!this._data) {
      return;
    }

    this._data = this.chartDataMapper(this._data);

    this.options = {
      backgroundColor: this.colorConfig.bg,
      color: [this.colorConfig.primary],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        top: '8%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: this.colorConfig.axisLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.colorConfig.textColor,
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: this.colorConfig.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: this.colorConfig.splitLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.colorConfig.textColor,
            },
          },
        },
      ],
      series: this._data,
    };

    this.cd.markForCheck();
  }

  private chartDataMapper(data): SeriesBar {
    data.barWidth = '60%';
    data.type = 'bar';
    return data;
  }
}

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

import SeriesPie = echarts.EChartOption.SeriesPie;


@Component({
  selector: 'app-pie-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart pie-chart' },
  template: `
      <div echarts [options]="options"></div>
  `,
})
export class PieChartComponent implements OnInit, OnDestroy {

  @Input() set data(data: SeriesPie) {
    this._data = data;
    this.updateOptions();
  }

  options: any = {};

  private _data: SeriesPie = {};
  private colorConfig: any = {};
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

  private updateOptions() {
    this.options = {
      backgroundColor: this.colorConfig.bg,
      color: [
        this.colorConfig.warning,
        this.colorConfig.info,
        this.colorConfig.danger,
        this.colorConfig.success,
        this.colorConfig.primary,
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        show: false,
        textStyle: {
          color: this.colorConfig.textColor,
        },
      },
      series: [
        {
          avoidLabelOverlap: true,
          name: this._data.name,
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: this._data.data,
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
            emphasis: {
              label: { show: false },
              labelLine: { show: false },
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: this.colorConfig.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
              textStyle: {
                color: this.colorConfig.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
              lineStyle: {
                color: this.colorConfig.axisLineColor,
              },
            },
          },
        },
      ],
      responsiveConfig: {
        500: customOptions,
        default: defaultOptions,
      },
    };

    this.cd.markForCheck();
  }
}

// Options to be set on width > `responsiveConfig.[breakpoint]`
const defaultOptions = {
  series: [{
    itemStyle: {
      normal: {
        label: { show: true },
        labelLine: { show: true },
      },
    },
    emphasis: {
      label: { show: true },
      labelLine: { show: true },
    },
    center: ['50%', '50%'],
  }],
  legend: {
    show: true,
    orient: 'vertical',
    left: 'left',
  },
};

// Options to be set on width < `responsiveConfig.[clientWidth]`
const customOptions = {
  series: [{
    itemStyle: {
      normal: {
        label: { show: false },
        labelLine: { show: false },
      },
    },
    emphasis: {
      label: { show: false },
      labelLine: { show: false },
    },
    center: ['50%', '45%'],
  }],
  legend: {
    show: true,
    orient: 'horizontal',
    left: 'center',
    bottom: 10,
  },
};

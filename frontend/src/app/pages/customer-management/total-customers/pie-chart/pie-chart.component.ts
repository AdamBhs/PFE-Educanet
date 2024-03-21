import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EchartsService } from './echarts.service';

@Component({
  selector: 'da-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, AfterViewInit {
  pieData;

  dataTablePieOption = {
    columns: [
      {
        field: 'visit',
        header: 'Agency',
        fieldType: 'text',
      },
      {
        field: 'percentage',
        header: 'Number',
        fieldType: 'text',
      },
    ],
  };

  pieSource = [];

  resizeSub: Subscription;
  pieChart: any;

  @ViewChild('chartWrapper') chartWrapper: ElementRef;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartsService.getPie().subscribe((option) => {
      this.pieData = option;
      for (let i = 0; i < this.pieData.legend.data.length; i++) {
        let temp = {
          visit: this.pieData.legend.data[i],
          percentage: this.pieData.series[0].data[i].value,
        };
        this.pieSource.push(temp);
      }
    });
  }

  getPieChart(e) {
    this.pieChart = e;
  }

  ngAfterViewInit(): void {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .subscribe((v) => {
        if (this.chartWrapper?.nativeElement?.clientWidth < 630) {
          this.pieData.legend = {
            orient: 'horizontal',
            bottom: 'auto',
            data: ['Carpi', 'Bazzano', 'Modena', 'SOLIERA'],
          };
          this.pieChart.setOption(this.pieData, true);
        } else {
          this.pieData.legend = {
            orient: 'vertical',
            left: 'auto',
            top: 'center',
            data: ['Carpi', 'Bazzano', 'Modena', 'SOLIERA'],
          };
          this.pieChart.setOption(this.pieData, true);
        }
      });
  }
}

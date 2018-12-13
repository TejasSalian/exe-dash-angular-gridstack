import { Component, OnInit } from '@angular/core';
import {GridStackWidgetInfo} from '../custom_modules/GridStackWidgetInfo';
import {Highcharts} from '../../assets/plugins/highcharts/highcharts.js';

declare var $: any;
declare var _: any;

@Component({
  selector: 'app-jquerymodel',
  templateUrl: './jquerymodel.component.html',
  styleUrls: ['./jquerymodel.component.scss']
})
export class JquerymodelComponent implements OnInit {

  constructor() { }

  private gridStackData: any;
  private savedState: any = {};
  private highcharts: any = {
    chart: {
      type: 'column'
    },

    title: {
      text: 'Highcharts responsive chart'
    },

    subtitle: {
      text: 'Resize the frame or click buttons to change appearance'
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },

    xAxis: {
      categories: ['Apples', 'Oranges', 'Bananas'],
      labels: {
        x: -10
      }
    },

    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Amount'
      }
    },

    series: [{
      name: 'Christmas Eve',
      data: [1, 4, 3]
    }, {
      name: 'Christmas Day before dinner',
      data: [6, 4, 2]
    }, {
      name: 'Christmas Day after dinner',
      data: [8, 4, 3]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          yAxis: {
            labels: {
              align: 'left',
              x: 0,
              y: -5
            },
            title: {
              text: null
            }
          },
          subtitle: {
            text: null
          },
          credits: {
            enabled: false
          }
        }
      }]
    }
  };

  public ngOnInit() {
    const highcharts = this.highcharts;
    $(document).ready(() => {
      $('.grid-stack').gridstack({
        width: 12,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        resizable: {
          handles: 'e, se, s, sw, w'
        }
      });
      $('#highchart').highcharts(this.highcharts);
      this.saveWidgetBox();
      $('.grid-stack').on('gsresizestop', function () {
        $.when($('#highchart').highcharts().destroy()).then($('#highchart').highcharts(highcharts));
      });
    });
  }

  saveWidgetBox(): void {
    const nodesVisible: [] = $('.grid-stack > .grid-stack-item:visible');
    const serializedData: any = _.map(nodesVisible, function (element: any): { x: number, y: number, width: number, height: number } {
      element = $(element);
      const node: any = element.data('_gridstack_node');
      return new GridStackWidgetInfo(node);
    }, this);
    this.savedState = JSON.stringify(serializedData, null, '    ');
    console.log(this.savedState);
  }

  loadWidgetBox(): void {
    this.gridStackData = $('.grid-stack').data('gridstack');
    const gridStackData = this.gridStackData;
    this.gridStackData.removeAll();
    const gridItems = JSON.parse(this.savedState);
    let key = 0;
    for (const node of gridItems) {
      key++;
      if (key === 2) {
        gridStackData.addWidget(
          $('<div><div class="grid-stack-item-content" /><div class="grid-stack-item-content" id="highchart"></div><div/>'),
          <string>node.x, <string>node.y, <string>node.width, <string>node.height
        );
      } else {
        gridStackData.addWidget(
          $('<div><div class="grid-stack-item-content" /><div class="grid-stack-item-content">' + key + '</div><div/>'),
          <string>node.x, <string>node.y, <string>node.width, <string>node.height
        );
      }
    }
    $('#highchart').highcharts(this.highcharts);
  }

}

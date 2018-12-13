import {Component, OnInit} from '@angular/core';
import {GridStackUI} from '../../../node_modules/gridstack/dist/gridstack.min.js';

declare var $: any;
declare var _: any;

@Component({
  selector: 'app-anguway',
  templateUrl: './anguway.component.html',
  styleUrls: ['./anguway.component.scss']
})
export class AnguwayComponent implements OnInit {
  private gridStack: any;
  private editEnabled = false;
  private widgets: any = [
    {'x': '0', 'y': '4', 'height': '2', 'width': '4', 'autoPosition': 0},
    {'x': '4', 'y': '2', 'height': '4', 'width': '4', 'autoPosition': 0},
    {'x': '8', 'y': '2', 'height': '4', 'width': '2', 'autoPosition': 0},
    {'x': '10', 'y': '2', 'height': '2', 'width': '2', 'autoPosition': 0},
    {'x': '0', 'y': '2', 'height': '2', 'width': '2', 'autoPosition': 0},
    {'x': '2', 'y': '0', 'height': '4', 'width': '2', 'autoPosition': 0},
    {'x': '10', 'y': '4', 'height': '2', 'width': '2', 'autoPosition': 0},
    {'x': '0', 'y': '0', 'height': '2', 'width': '2', 'autoPosition': 0},
    {'x': '4', 'y': '0', 'height': '2', 'width': '4', 'autoPosition': 0},
    {'x': '8', 'y': '0', 'height': '2', 'width': '2', 'autoPosition': 0},
    {'x': '10', 'y': '0', 'height': '2', 'width': '2', 'autoPosition': 0}
  ];

  public gridStackObject: any;

  constructor() {
  }

  ngOnInit() {
    $(document).ready(() => {
      this.gridStack = this.initialiseGrid();
      this.gridStack.disable();
    });
  }

  initialiseGrid(): any {
    $('.grid-stack').removeAttr('style');
    $('.grid-stack').removeAttr('data-gs-current-height');
    $('.grid-stack').attr('class', 'grid-stack');
    this.gridStackObject = $('.grid-stack').gridstack({
      width: 12,
      float: true,
      alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      resizable: {
        handles: 'e, se, s, sw, w'
      }
    });
    return this.gridStackObject.data('gridstack');
  }

  createWidget(widget): void {
    const node = {
      x: widget.x,
      y: widget.y,
      height: widget.height,
      width: widget.width,
      autoPosition: widget.autoPosition,
    };
    this.widgets.push(node);
    // I don't know why but this works
    setTimeout(() => {
      this.gridStack.makeWidget($('#gsi-' + (this.widgets.length - 1)));
    }, 0);
  }

  destroyGrid(): void {
    this.gridStack.destroy(false);
    this.gridStackObject = undefined;
    this.gridStack = undefined;
  }

  editToggle(): void {
    this.editEnabled = !this.editEnabled;
    this.editEnabled ? this.gridStack.enable() : this.gridStack.disable();
  }

  saveWidgetBox(): void {
    const nodesVisible: [] = $('.grid-stack > .grid-stack-item:visible');
    this.widgets = [];
    for (const el of nodesVisible) {
      const node: any = {
        x: <number>$(el).attr('data-gs-x'),
        y: <number>$(el).attr('data-gs-y'),
        height: <number>$(el).attr('data-gs-height'),
        width: <number>$(el).attr('data-gs-width'),
        autoPosition: 0,
      };
      this.widgets.push(node);
    }
    // I don't know why but this works
    setTimeout(() => {
      this.destroyGrid();
      this.gridStack = this.initialiseGrid();
      this.editToggle();
    }, 0);
  }

  loadWidgetBox(): void {
  }

  addWidget(): void {
    const node: any = {
      x: 0,
      y: 0,
      height: 2,
      width: 2,
      autoPosition: 1
    };
    this.createWidget(node);
  }

}

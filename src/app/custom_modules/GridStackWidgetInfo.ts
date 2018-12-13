export class GridStackWidgetInfo {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(node: any) {
    this.x = node.x;
    this.y = node.y;
    this.width = node.width;
    this.height = node.height;
  }
}

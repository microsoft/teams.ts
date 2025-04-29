import { IElement, Element } from '../base';

import { ChartColor } from './color';

export interface ILineChart extends IElement {
  type: 'Chart.Line';

  /**
   * the title of the chart.
   */
  title?: string;

  /**
   * the color to use for all data points.
   */
  color?: ChartColor;

  /**
   * the name of the set of colors to use.
   */
  colorSet?: string;

  /**
   * the data to display in the chart.
   */
  data: ILineChartData[];
}

export type LineChartOptions = Omit<ILineChart, 'type' | 'data'>;

export class LineChart extends Element implements ILineChart {
  type: 'Chart.Line';

  /**
   * the title of the chart.
   */
  title?: string;

  /**
   * the color to use for all data points.
   */
  color?: ChartColor;

  /**
   * the name of the set of colors to use.
   */
  colorSet?: string;

  /**
   * the data to display in the chart.
   */
  data: ILineChartData[];

  constructor(...data: ILineChartData[]) {
    super();
    this.type = 'Chart.Line';
    this.data = data;
  }

  withOptions(value: LineChartOptions) {
    Object.assign(this, value);
    return this;
  }

  withTitle(value: string) {
    this.title = value;
    return this;
  }

  withColorSet(value: string) {
    this.colorSet = value;
    return this;
  }

  addData(...data: ILineChartData[]) {
    this.data.push(...data);
    return this;
  }
}

export interface ILineChartData {
  /**
   * the color to use for the data point.
   */
  color?: ChartColor;

  /**
   * the legend of the chart.
   */
  legend?: string;

  /**
   * the data points in the series.
   */
  values: ILineChartDataPoint[];
}

export type LineChartDataOptions = Omit<ILineChartData, 'values'>;

export class LineChartData implements ILineChartData {
  /**
   * the color to use for the data point.
   */
  color?: ChartColor;

  /**
   * the legend of the chart.
   */
  legend?: string;

  /**
   * the data points in the series.
   */
  values: ILineChartDataPoint[];

  constructor(...dataPoints: ILineChartDataPoint[]) {
    this.values = dataPoints;
  }

  withOptions(value: LineChartDataOptions) {
    Object.assign(this, value);
    return this;
  }

  withColor(value: ChartColor) {
    this.color = value;
    return this;
  }

  withLegend(value: string) {
    this.legend = value;
    return this;
  }

  addDataPoints(...value: ILineChartDataPoint[]) {
    this.values.push(...value);
    return this;
  }
}

export interface ILineChartDataPoint {
  /**
   * the x axis value of the data point.
   */
  x: number | string;

  /**
   * the y axis value of the data point.
   */
  y: number;
}

export class LineChartDataPoint implements ILineChartDataPoint {
  /**
   * the x axis value of the data point.
   */
  x: number | string;

  /**
   * the y axis value of the data point.
   */
  y: number;

  constructor(x: number | string, y: number) {
    this.x = x;
    this.y = y;
  }
}

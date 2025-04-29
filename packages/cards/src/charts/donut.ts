import { IElement, Element } from '../base';

import { ChartColor } from './color';

export interface IDonutChart extends IElement {
  type: 'Chart.Donut';

  /**
   * the title of the chart.
   */
  title?: string;

  /**
   * the name of the set of colors to use.
   */
  colorSet?: string;

  /**
   * the data to display in the chart.
   */
  data: IDonutChartData[];

  /**
   * the area of a `Layout.AreaGrid` layout in which an element should be displayed.
   */
  'grid.area'?: string;
}

export type DonutChartOptions = Omit<IDonutChart, 'type' | 'data'>;

export class DonutChart extends Element implements IDonutChart {
  type: 'Chart.Donut';

  /**
   * the title of the chart.
   */
  title?: string;

  /**
   * the name of the set of colors to use.
   */
  colorSet?: string;

  /**
   * the data to display in the chart.
   */
  data: IDonutChartData[];

  constructor(...data: IDonutChartData[]) {
    super();
    this.type = 'Chart.Donut';
    this.data = data;
  }

  withOptions(value: DonutChartOptions) {
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

  addData(...data: IDonutChartData[]) {
    this.data.push(...data);
    return this;
  }
}

export interface IDonutChartData {
  /**
   * the color to use for the data point.
   */
  color?: ChartColor;

  /**
   * the legend of the chart.
   */
  legend?: string;

  /**
   * the value associated with the data point.
   */
  value: number;
}

export type DonutChartDataOptions = Omit<IDonutChartData, 'value'>;

export class DonutChartData implements IDonutChartData {
  /**
   * the color to use for the data point.
   */
  color?: ChartColor;

  /**
   * the legend of the chart.
   */
  legend?: string;

  /**
   * the value associated with the data point.
   */
  value: number;

  constructor(value = 0, options: DonutChartDataOptions = {}) {
    this.value = value;
    this.withOptions(options);
  }

  withOptions(value: DonutChartDataOptions) {
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

  withValue(value: number) {
    this.value = value;
    return this;
  }
}

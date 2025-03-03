import { BaseElement } from '../base';
import { HorizontalAlignment } from '../common';
import { ChartColor } from './color';

export interface LineChart extends BaseElement {
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
  data: LineChartData[];

  /**
   * the area of a `Layout.AreaGrid` layout in which an element should be displayed.
   */
  'grid.area'?: string;

  /**
   * controls how the element should be horizontally aligned.
   */
  horizontalAlignment?: HorizontalAlignment;
}

export type LineChartParams = Omit<LineChart, 'type' | 'data'>;

export function LineChart(data: LineChartData[] = [], params?: LineChartParams): LineChart {
  return {
    type: 'Chart.Line',
    data,
    ...params,
  };
}

export interface LineChartData {
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
  values: LineChartDataPoint[];
}

export type LineChartDataParams = Omit<LineChartData, 'values'>;

export function LineChartData(
  values: LineChartDataPoint[] = [],
  params?: LineChartDataParams
): LineChartData {
  return {
    values,
    ...params,
  };
}

export interface LineChartDataPoint {
  /**
   * the x axis value of the data point.
   */
  x: number | string;

  /**
   * the y axis value of the data point.
   */
  y: number;
}

export function LineChartDataPoint(x: number | string, y: number): LineChartDataPoint {
  return { x, y };
}

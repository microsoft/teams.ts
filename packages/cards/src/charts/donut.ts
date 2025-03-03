import { BaseElement } from '../base';
import { HorizontalAlignment } from '../common';
import { ChartColor } from './color';

export interface DonutChart extends BaseElement {
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
  data: DonutChartData[];

  /**
   * the area of a `Layout.AreaGrid` layout in which an element should be displayed.
   */
  'grid.area'?: string;

  /**
   * controls how the element should be horizontally aligned.
   */
  horizontalAlignment?: HorizontalAlignment;
}

export type DonutChartParams = Omit<DonutChart, 'type' | 'data'>;

export function DonutChart(data: DonutChartData[] = [], params?: DonutChartParams): DonutChart {
  return {
    type: 'Chart.Donut',
    data,
    ...params,
  };
}

export interface DonutChartData {
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

export type DonutChartDataParams = Omit<DonutChartData, 'value'>;

export function DonutChartData(value: number = 0, params?: DonutChartDataParams): DonutChartData {
  return {
    value,
    ...params,
  };
}

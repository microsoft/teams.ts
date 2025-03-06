import { IAreaGridLayout } from './area-grid';
import { IFlowLayout } from './flow';
import { IStackLayout } from './stack';

export type Layout = IFlowLayout | IStackLayout | IAreaGridLayout;

export * from './flow';
export * from './area-grid';
export * from './stack';

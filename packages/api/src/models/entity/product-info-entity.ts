export type ProductInfoEntity = {
  readonly type: 'ProductInfo';

  /**
   * Product identifier (ex COPILOT)
   */
  id: string;

  /**
   * other properties
   */
  [key: string]: any;
};

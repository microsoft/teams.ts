import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomItemsFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomItemsFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCellColorFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCellColorFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCustomFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCustomFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyDynamicFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyDynamicFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyFontColorFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyFontColorFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopItemsFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopItemsFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopPercentFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopPercentFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyValuesFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyValuesFilter',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'drive-id',
        'driveItem-id',
        'workbookWorksheet-id',
        'workbookTable-id',
        'workbookTableColumn-id',
      ],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter`
 *
 * The filter applied to the column. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    paramDefs: {
      path: [
        'drive-id',
        'driveItem-id',
        'workbookWorksheet-id',
        'workbookTable-id',
        'workbookTableColumn-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    paramDefs: {
      path: [
        'drive-id',
        'driveItem-id',
        'workbookWorksheet-id',
        'workbookTable-id',
        'workbookTableColumn-id',
      ],
    },
    params,
    body,
  };
}

export const apply = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply`
   *
   * Apply the given filter criteria on the given column.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyBottomItemsFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomItemsFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomItemsFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomItemsFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomItemsFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomItemsFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyBottomPercentFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyCellColorFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCellColorFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCellColorFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCellColorFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCellColorFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCellColorFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyCustomFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCustomFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCustomFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCustomFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCustomFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyCustomFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyDynamicFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyDynamicFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyDynamicFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyDynamicFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyDynamicFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyDynamicFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyFontColorFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyFontColorFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyFontColorFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyFontColorFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyFontColorFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyFontColorFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyIconFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyTopItemsFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopItemsFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopItemsFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopItemsFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopItemsFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopItemsFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyTopPercentFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopPercentFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopPercentFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopPercentFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopPercentFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyTopPercentFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const applyValuesFilter = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyValuesFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyValuesFilter']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyValuesFilter']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyValuesFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyValuesFilter',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
      body,
    };
  },
};

export const clear = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear`
   *
   * Clear the filter on the given column.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookTable-id',
          'workbookTableColumn-id',
        ],
      },
      params,
    };
  },
};

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/add': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/add',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'workbookTable-id', 'workbookTableRow-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows`
 *
 * The list of all the rows in the table. Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}`
 *
 * The list of all the rows in the table. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id', 'workbookTableRow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id', 'workbookTableRow-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/add`
   *
   * Adds rows to the end of the table. Note that the API can accept multiple rows data using this API. Adding one row at a time could lead to performance degradation. The recommended approach would be to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform single rows add operation. Experiment with the number of rows to determine the ideal number of rows to use in single API call.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/add']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/add']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/add',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
      body,
    };
  },
};

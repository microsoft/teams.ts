import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task',
    'patch'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes',
    'get'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}',
    'patch'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}',
    'delete'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task`
 *
 * The task associated with the comment. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
    },
    params,
    body,
  };
}

export const changes = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes`
   *
   * A collection of task change histories.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
      },
      params,
    };
  },
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}`
   *
   * A collection of task change histories.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookDocumentTask-id',
          'workbookDocumentTaskChange-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}',
      paramDefs: {
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookDocumentTask-id',
          'workbookDocumentTaskChange-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment/task/changes/{workbookDocumentTaskChange-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'drive-id',
          'driveItem-id',
          'workbookWorksheet-id',
          'workbookDocumentTask-id',
          'workbookDocumentTaskChange-id',
        ],
      },
      params,
    };
  },
};

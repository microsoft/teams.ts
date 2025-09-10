export * as application from './application';
export * as comments from './comments';
export * as functions from './functions';
export * as names from './names';
export * as tables from './tables';
export * as worksheets from './worksheets';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/closeSession': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/closeSession',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/createSession',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
    'get'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    'patch'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    'delete'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/refreshSession': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/refreshSession',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook`
 *
 * For files that are Excel spreadsheets, access to the workbook API to work with the spreadsheet&#x27;s contents. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const closeSession = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/closeSession`
   *
   * Use this API to close an existing workbook session.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/closeSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/closeSession']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/closeSession',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const createSession = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession`
   *
   * Create a new workbook session.  Excel APIs can be called in one of two modes:  To represent the session in the API, use the workbook-session-id: {session-id} header.  In some cases, creating a new session requires an indeterminate time to complete. Microsoft Graph also provides a long running operations pattern. This pattern provides a way to poll for creation status updates, without waiting for the creation to complete. The following are the steps:
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/createSession',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const operations = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations`
   *
   * The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}`
   *
   * The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'driveItem-id', 'workbookOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id', 'workbookOperation-id'],
      },
      params,
    };
  },
};

export const refreshSession = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/refreshSession`
   *
   * Use this API to refresh an existing workbook session.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/refreshSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/refreshSession']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/refreshSession',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

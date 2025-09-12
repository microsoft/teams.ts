import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/names': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/names': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/add': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names/add',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/addFormulaLocal': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names/addFormulaLocal',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet',
    'get'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'workbookNamedItem-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/names`
 *
 * Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}`
 *
 * Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookNamedItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookNamedItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/names`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/add`
   *
   * Adds a new name to the collection of the given scope using the user&#x27;s locale for the formula.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/add']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/add']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names/add',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const addFormulaLocal = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/addFormulaLocal`
   *
   * Adds a new name to the collection of the given scope using the user&#x27;s locale for the formula.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/addFormulaLocal']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/addFormulaLocal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/addFormulaLocal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names/addFormulaLocal',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const worksheet = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet`
   *
   * Return the worksheet to which the named item is scoped. Available only if the item is scoped to the worksheet. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'driveItem-id', 'workbookNamedItem-id'],
      },
      params,
    };
  },
};

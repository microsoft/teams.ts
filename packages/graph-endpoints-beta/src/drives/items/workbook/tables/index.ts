export * as columns from './columns';
export * as rows from './rows';
export * as sort from './sort';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/add': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/add',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/clearFilters': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/clearFilters',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/convertToRange': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/convertToRange',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/reapplyFilters': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/reapplyFilters',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet',
    'get'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables`
 *
 * Represents a collection of tables associated with the workbook. Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}`
 *
 * Represents a collection of tables associated with the workbook. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/add`
   *
   * Create a new table. The range source address determines the worksheet under which the table will be added. If the table can&#x27;t be added (for example, because the address is invalid, or the table would overlap with another table), an error is thrown.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/add']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/add']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/add',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const clearFilters = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/clearFilters`
   *
   * Clears all the filters currently applied on the table.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/clearFilters']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/clearFilters']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/clearFilters',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
    };
  },
};

export const convertToRange = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/convertToRange`
   *
   * Converts the table into a normal range of cells. All data is preserved.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/convertToRange']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/convertToRange']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/convertToRange',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
    };
  },
};

export const reapplyFilters = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/reapplyFilters`
   *
   * Reapplies all the filters currently on the table.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/reapplyFilters']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/reapplyFilters']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/reapplyFilters',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
    };
  },
};

export const worksheet = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet`
   *
   * The worksheet containing the current table. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
    };
  },
};

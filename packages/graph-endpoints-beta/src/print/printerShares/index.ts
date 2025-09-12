export * as allowedGroups from './allowedGroups';
export * as allowedUsers from './allowedUsers';
export * as jobs from './jobs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printerShares/{printerShare-id}': Operation<
    '/print/printerShares/{printerShare-id}',
    'delete'
  >;
  'GET /print/printerShares': Operation<'/print/printerShares', 'get'>;
  'GET /print/printerShares/{printerShare-id}': Operation<
    '/print/printerShares/{printerShare-id}',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}': Operation<
    '/print/printerShares/{printerShare-id}',
    'patch'
  >;
  'POST /print/printerShares': Operation<'/print/printerShares', 'post'>;
  'GET /print/printerShares/{printerShare-id}/printer': Operation<
    '/print/printerShares/{printerShare-id}/printer',
    'get'
  >;
}

/**
 * `DELETE /print/printerShares/{printerShare-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /print/printerShares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/printerShares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printerShares/{printerShare-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printerShare-id'],
    },
    params,
  };
}

/**
 * `GET /print/printerShares`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares']['parameters']
): EndpointRequest<IEndpoints['GET /print/printerShares']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printerShares/{printerShare-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/printerShares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}',
    paramDefs: {
      path: ['printerShare-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printerShares/{printerShare-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/printerShares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}',
    paramDefs: {
      path: ['printerShare-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printerShares`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares']['body']
): EndpointRequest<IEndpoints['POST /print/printerShares']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares',
    body,
  };
}

export const printer = {
  /**
   * `GET /print/printerShares/{printerShare-id}/printer`
   *
   * The printer that this printer share is related to.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /print/printerShares/{printerShare-id}/printer']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/printerShares/{printerShare-id}/printer']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printerShares/{printerShare-id}/printer',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printerShare-id'],
      },
      params,
    };
  },
};

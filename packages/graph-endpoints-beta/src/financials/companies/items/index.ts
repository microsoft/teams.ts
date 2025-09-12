export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/items/{item-id}': Operation<
    '/financials/companies/{company-id}/items/{item-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/items': Operation<
    '/financials/companies/{company-id}/items',
    'get'
  >;
  'GET /financials/companies/{company-id}/items/{item-id}': Operation<
    '/financials/companies/{company-id}/items/{item-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/items/{item-id}': Operation<
    '/financials/companies/{company-id}/items/{item-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/items': Operation<
    '/financials/companies/{company-id}/items',
    'post'
  >;
  'GET /financials/companies/{company-id}/items/{item-id}/itemCategory': Operation<
    '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory': Operation<
    '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory': Operation<
    '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/items/{item-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/items/{item-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'item-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/items`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/items',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/items/{item-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/items/{item-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/items/{item-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/items/{item-id}',
    paramDefs: {
      path: ['company-id', 'item-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/items/{item-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/items/{item-id}',
    paramDefs: {
      path: ['company-id', 'item-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/items']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/items']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/items',
    paramDefs: {
      path: ['company-id'],
    },
    params,
    body,
  };
}

export const itemCategory = {
  /**
   * `GET /financials/companies/{company-id}/items/{item-id}/itemCategory`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/items/{item-id}/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/items/{item-id}/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/items/{item-id}/itemCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'item-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/items/{item-id}/itemCategory',
      paramDefs: {
        path: ['company-id', 'item-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/items/{item-id}/itemCategory',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'item-id'],
      },
      params,
    };
  },
};

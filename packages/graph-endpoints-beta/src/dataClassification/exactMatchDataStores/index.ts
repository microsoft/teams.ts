export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    'delete'
  >;
  'GET /dataClassification/exactMatchDataStores': Operation<
    '/dataClassification/exactMatchDataStores',
    'get'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    'get'
  >;
  'PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    'patch'
  >;
  'POST /dataClassification/exactMatchDataStores': Operation<
    '/dataClassification/exactMatchDataStores',
    'post'
  >;
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['exactMatchDataStore-id'],
    },
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/exactMatchDataStores']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    paramDefs: {
      path: ['exactMatchDataStore-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    paramDefs: {
      path: ['exactMatchDataStore-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /dataClassification/exactMatchDataStores`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchDataStores']['body']
): EndpointRequest<IEndpoints['POST /dataClassification/exactMatchDataStores']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchDataStores',
    body,
  };
}

export const lookup = {
  /**
   * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup']['body'],
    params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup',
      paramDefs: {
        path: ['exactMatchDataStore-id'],
      },
      params,
      body,
    };
  },
};

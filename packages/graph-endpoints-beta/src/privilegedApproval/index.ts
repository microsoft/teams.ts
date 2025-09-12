export * as roleInfo from './roleInfo';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedApproval/{privilegedApproval-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}',
    'delete'
  >;
  'GET /privilegedApproval': Operation<'/privilegedApproval', 'get'>;
  'GET /privilegedApproval/{privilegedApproval-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}',
    'patch'
  >;
  'POST /privilegedApproval': Operation<'/privilegedApproval', 'post'>;
  'GET /privilegedApproval/{privilegedApproval-id}/request': Operation<
    '/privilegedApproval/{privilegedApproval-id}/request',
    'get'
  >;
}

/**
 * `DELETE /privilegedApproval/{privilegedApproval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedApproval/{privilegedApproval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedApproval-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedApproval`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedApproval']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedApproval']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedApproval/{privilegedApproval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}',
    paramDefs: {
      path: ['privilegedApproval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedApproval/{privilegedApproval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}']['body'],
  params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedApproval/{privilegedApproval-id}',
    paramDefs: {
      path: ['privilegedApproval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedApproval`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedApproval']['body']
): EndpointRequest<IEndpoints['POST /privilegedApproval']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedApproval',
    body,
  };
}

export const request = {
  /**
   * `GET /privilegedApproval/{privilegedApproval-id}/request`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/request']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/request']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedApproval/{privilegedApproval-id}/request',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedApproval-id'],
      },
      params,
    };
  },
};

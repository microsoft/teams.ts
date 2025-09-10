export * as bundles from './bundles';
export * as createdByUser from './createdByUser';
export * as following from './following';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as doList from './list';
export * as root from './root';
export * as special from './special';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}': Operation<'/drives/{drive-id}', 'delete'>;
  'GET /drives': Operation<'/drives', 'get'>;
  'GET /drives/{drive-id}': Operation<'/drives/{drive-id}', 'get'>;
  'PATCH /drives/{drive-id}': Operation<'/drives/{drive-id}', 'patch'>;
  'POST /drives': Operation<'/drives', 'post'>;
}

/**
 * `DELETE /drives/{drive-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}']['response']> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id'],
    },
    params,
  };
}

/**
 * `GET /drives`
 *
 */
export function list(
  params?: IEndpoints['GET /drives']['parameters']
): EndpointRequest<IEndpoints['GET /drives']['response']> {
  return {
    method: 'get',
    path: '/drives',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}',
    paramDefs: {
      path: ['drive-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /drives/{drive-id}']['response']> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives`
 *
 */
export function create(
  body: IEndpoints['POST /drives']['body']
): EndpointRequest<IEndpoints['POST /drives']['response']> {
  return {
    method: 'post',
    path: '/drives',
    body,
  };
}

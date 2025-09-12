export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/parentGroup': Operation<
    '/termStore/sets/{set-id}/parentGroup',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/parentGroup': Operation<
    '/termStore/sets/{set-id}/parentGroup',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/parentGroup': Operation<
    '/termStore/sets/{set-id}/parentGroup',
    'patch'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/parentGroup`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/parentGroup',
    paramDefs: {
      header: ['If-Match'],
      path: ['set-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup`
 *
 * The parent [group] that contains the set.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/parentGroup']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup',
    paramDefs: {
      path: ['set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/parentGroup`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/parentGroup',
    paramDefs: {
      path: ['set-id'],
    },
    params,
    body,
  };
}

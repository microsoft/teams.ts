export * as groups from './groups';
export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore`
 *
 * The default termStore under this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

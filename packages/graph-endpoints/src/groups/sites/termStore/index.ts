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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}

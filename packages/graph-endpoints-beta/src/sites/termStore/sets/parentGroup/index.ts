export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup',
    'patch'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup`
 *
 * The parent [group] that contains the set.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}

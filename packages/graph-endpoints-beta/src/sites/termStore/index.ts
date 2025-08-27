export * as groups from './groups';
export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore': Operation<'/sites/{site-id}/termStore', 'delete'>;
  'GET /sites/{site-id}/termStore': Operation<'/sites/{site-id}/termStore', 'get'>;
  'PATCH /sites/{site-id}/termStore': Operation<'/sites/{site-id}/termStore', 'patch'>;
}

/**
 * `DELETE /sites/{site-id}/termStore`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/termStore']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore`
 *
 * Read the properties and relationships of a store object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/termStore']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}

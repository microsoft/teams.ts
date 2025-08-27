export * as createdByUser from './createdByUser';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/recycleBin': Operation<'/sites/{site-id}/recycleBin', 'delete'>;
  'GET /sites/{site-id}/recycleBin': Operation<'/sites/{site-id}/recycleBin', 'get'>;
  'PATCH /sites/{site-id}/recycleBin': Operation<'/sites/{site-id}/recycleBin', 'patch'>;
}

/**
 * `DELETE /sites/{site-id}/recycleBin`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/recycleBin']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/recycleBin']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/recycleBin',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/recycleBin`
 *
 * A container for a collection of recycleBinItem resources in this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/recycleBin']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/recycleBin`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/recycleBin']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/recycleBin']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/recycleBin']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/recycleBin',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}

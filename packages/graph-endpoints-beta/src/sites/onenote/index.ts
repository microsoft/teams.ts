export * as notebooks from './notebooks';
export * as operations from './operations';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote': Operation<'/sites/{site-id}/onenote', 'delete'>;
  'GET /sites/{site-id}/onenote': Operation<'/sites/{site-id}/onenote', 'get'>;
  'PATCH /sites/{site-id}/onenote': Operation<'/sites/{site-id}/onenote', 'patch'>;
}

/**
 * `DELETE /sites/{site-id}/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/onenote',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/onenote',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}

export * as notebooks from './notebooks';
export * as operations from './operations';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote': Operation<'/me/onenote', 'delete'>;
  'GET /me/onenote': Operation<'/me/onenote', 'get'>;
  'PATCH /me/onenote': Operation<'/me/onenote', 'patch'>;
}

/**
 * `DELETE /me/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/onenote`
 *
 */
export function get(
  params?: IEndpoints['GET /me/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote']['response']> {
  return {
    method: 'get',
    path: '/me/onenote',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote']['body'],
  params?: IEndpoints['PATCH /me/onenote']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote',
    paramDefs: [],
    params,
    body,
  };
}

export * as updates from './updates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows': Operation<'/admin/windows', 'delete'>;
  'GET /admin/windows': Operation<'/admin/windows', 'get'>;
  'PATCH /admin/windows': Operation<'/admin/windows', 'patch'>;
}

/**
 * `DELETE /admin/windows`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/windows']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/windows`
 *
 * A container for all Windows administrator functionalities. Read-only.
 */
export function list(
  params?: IEndpoints['GET /admin/windows']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows']['body'],
  params?: IEndpoints['PATCH /admin/windows']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/windows']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows',
    paramDefs: [],
    params,
    body,
  };
}

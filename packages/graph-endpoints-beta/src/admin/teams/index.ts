export * as policy from './policy';
export * as userConfigurations from './userConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/teams': Operation<'/admin/teams', 'delete'>;
  'GET /admin/teams': Operation<'/admin/teams', 'get'>;
  'PATCH /admin/teams': Operation<'/admin/teams', 'patch'>;
}

/**
 * `DELETE /admin/teams`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/teams']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/teams',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/teams`
 *
 * Represents a collection of user configurations.
 */
export function list(
  params?: IEndpoints['GET /admin/teams']['parameters']
): EndpointRequest<IEndpoints['GET /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/teams`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams']['body'],
  params?: IEndpoints['PATCH /admin/teams']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams',
    paramDefs: [],
    params,
    body,
  };
}

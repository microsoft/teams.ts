import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/teams/policy': Operation<'/admin/teams/policy', 'delete'>;
  'GET /admin/teams/policy': Operation<'/admin/teams/policy', 'get'>;
  'PATCH /admin/teams/policy': Operation<'/admin/teams/policy', 'patch'>;
}

/**
 * `DELETE /admin/teams/policy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/teams/policy']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/teams/policy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/teams/policy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/teams/policy`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/teams/policy']['parameters']
): EndpointRequest<IEndpoints['GET /admin/teams/policy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/teams/policy`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams/policy']['body'],
  params?: IEndpoints['PATCH /admin/teams/policy']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/teams/policy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams/policy',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/directoryRoleAccessReviewPolicy': Operation<
    '/policies/directoryRoleAccessReviewPolicy',
    'delete'
  >;
  'GET /policies/directoryRoleAccessReviewPolicy': Operation<
    '/policies/directoryRoleAccessReviewPolicy',
    'get'
  >;
  'PATCH /policies/directoryRoleAccessReviewPolicy': Operation<
    '/policies/directoryRoleAccessReviewPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/directoryRoleAccessReviewPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/directoryRoleAccessReviewPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/directoryRoleAccessReviewPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/directoryRoleAccessReviewPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/directoryRoleAccessReviewPolicy`
 *
 */
export function get(
  params?: IEndpoints['GET /policies/directoryRoleAccessReviewPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/directoryRoleAccessReviewPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/directoryRoleAccessReviewPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/directoryRoleAccessReviewPolicy`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/directoryRoleAccessReviewPolicy']['body'],
  params?: IEndpoints['PATCH /policies/directoryRoleAccessReviewPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/directoryRoleAccessReviewPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/directoryRoleAccessReviewPolicy',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoles/{privilegedRole-id}/settings': Operation<
    '/privilegedRoles/{privilegedRole-id}/settings',
    'delete'
  >;
  'GET /privilegedRoles/{privilegedRole-id}/settings': Operation<
    '/privilegedRoles/{privilegedRole-id}/settings',
    'get'
  >;
  'PATCH /privilegedRoles/{privilegedRole-id}/settings': Operation<
    '/privilegedRoles/{privilegedRole-id}/settings',
    'patch'
  >;
}

/**
 * `DELETE /privilegedRoles/{privilegedRole-id}/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoles/{privilegedRole-id}/settings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoles/{privilegedRole-id}/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoles/{privilegedRole-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles/{privilegedRole-id}/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoles/{privilegedRole-id}/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/settings']['body'],
  params?: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoles/{privilegedRole-id}/settings',
    paramDefs: [{ name: 'privilegedRole-id', in: 'path' }],
    params,
    body,
  };
}

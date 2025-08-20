import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoles/{privilegedRole-id}/summary': Operation<
    '/privilegedRoles/{privilegedRole-id}/summary',
    'delete'
  >;
  'GET /privilegedRoles/{privilegedRole-id}/summary': Operation<
    '/privilegedRoles/{privilegedRole-id}/summary',
    'get'
  >;
  'PATCH /privilegedRoles/{privilegedRole-id}/summary': Operation<
    '/privilegedRoles/{privilegedRole-id}/summary',
    'patch'
  >;
}

/**
 * `DELETE /privilegedRoles/{privilegedRole-id}/summary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/summary']['parameters']
): EndpointRequest<IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/summary']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoles/{privilegedRole-id}/summary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoles/{privilegedRole-id}/summary`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/summary']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoles/{privilegedRole-id}/summary']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles/{privilegedRole-id}/summary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoles/{privilegedRole-id}/summary`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/summary']['body'],
  params?: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/summary']['parameters']
): EndpointRequest<IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/summary']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoles/{privilegedRole-id}/summary',
    paramDefs: [{ name: 'privilegedRole-id', in: 'path' }],
    params,
    body,
  };
}

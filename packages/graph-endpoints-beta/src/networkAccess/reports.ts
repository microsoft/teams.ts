import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/reports': Operation<'/networkAccess/reports', 'delete'>;
  'GET /networkAccess/reports': Operation<'/networkAccess/reports', 'get'>;
  'PATCH /networkAccess/reports': Operation<'/networkAccess/reports', 'patch'>;
}

/**
 * `DELETE /networkAccess/reports`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/reports']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/reports']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/reports',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/reports`
 *
 * Represents the status of the Global Secure Access services for the tenant.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/reports']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/reports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/reports',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/reports']['body'],
  params?: IEndpoints['PATCH /networkAccess/reports']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/reports']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/reports',
    paramDefs: [],
    params,
    body,
  };
}

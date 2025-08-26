import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/tenantStatus': Operation<'/networkAccess/tenantStatus', 'delete'>;
  'GET /networkAccess/tenantStatus': Operation<'/networkAccess/tenantStatus', 'get'>;
  'PATCH /networkAccess/tenantStatus': Operation<'/networkAccess/tenantStatus', 'patch'>;
}

/**
 * `DELETE /networkAccess/tenantStatus`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/tenantStatus']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/tenantStatus']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/tenantStatus',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/tenantStatus`
 *
 * Retrieve the onboarding status of a specific tenant.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/tenantStatus']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/tenantStatus']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tenantStatus',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/tenantStatus`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/tenantStatus']['body'],
  params?: IEndpoints['PATCH /networkAccess/tenantStatus']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/tenantStatus']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/tenantStatus',
    paramDefs: [],
    params,
    body,
  };
}

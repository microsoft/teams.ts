import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/defaultAppManagementPolicy': Operation<
    '/policies/defaultAppManagementPolicy',
    'delete'
  >;
  'GET /policies/defaultAppManagementPolicy': Operation<
    '/policies/defaultAppManagementPolicy',
    'get'
  >;
  'PATCH /policies/defaultAppManagementPolicy': Operation<
    '/policies/defaultAppManagementPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/defaultAppManagementPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/defaultAppManagementPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/defaultAppManagementPolicy']['response']> {
  return {
    method: 'delete',
    path: '/policies/defaultAppManagementPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/defaultAppManagementPolicy`
 *
 * Read the properties of a tenantAppManagementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/defaultAppManagementPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/defaultAppManagementPolicy']['response']> {
  return {
    method: 'get',
    path: '/policies/defaultAppManagementPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/defaultAppManagementPolicy`
 *
 * Update the properties of a tenantAppManagementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/defaultAppManagementPolicy']['body'],
  params?: IEndpoints['PATCH /policies/defaultAppManagementPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/defaultAppManagementPolicy']['response']> {
  return {
    method: 'patch',
    path: '/policies/defaultAppManagementPolicy',
    paramDefs: [],
    params,
    body,
  };
}

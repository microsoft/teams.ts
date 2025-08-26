import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/externalIdentitiesPolicy': Operation<
    '/policies/externalIdentitiesPolicy',
    'delete'
  >;
  'GET /policies/externalIdentitiesPolicy': Operation<'/policies/externalIdentitiesPolicy', 'get'>;
  'PATCH /policies/externalIdentitiesPolicy': Operation<
    '/policies/externalIdentitiesPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/externalIdentitiesPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/externalIdentitiesPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/externalIdentitiesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/externalIdentitiesPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/externalIdentitiesPolicy`
 *
 * Read the properties and relationships of the tenant-wide externalIdentitiesPolicy object that controls whether external users can leave a Microsoft Entra tenant via self-service controls.
 */
export function get(
  params?: IEndpoints['GET /policies/externalIdentitiesPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/externalIdentitiesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/externalIdentitiesPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/externalIdentitiesPolicy`
 *
 * Update the settings of the tenant-wide externalIdentitiesPolicy object that controls whether external users can leave a Microsoft Entra tenant via self-service controls.
 */
export function update(
  body: IEndpoints['PATCH /policies/externalIdentitiesPolicy']['body'],
  params?: IEndpoints['PATCH /policies/externalIdentitiesPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/externalIdentitiesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/externalIdentitiesPolicy',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/adminConsentRequestPolicy': Operation<
    '/policies/adminConsentRequestPolicy',
    'delete'
  >;
  'GET /policies/adminConsentRequestPolicy': Operation<
    '/policies/adminConsentRequestPolicy',
    'get'
  >;
  'PATCH /policies/adminConsentRequestPolicy': Operation<
    '/policies/adminConsentRequestPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/adminConsentRequestPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/adminConsentRequestPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/adminConsentRequestPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/adminConsentRequestPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/adminConsentRequestPolicy`
 *
 * Read the properties and relationships of an adminConsentRequestPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/adminConsentRequestPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/adminConsentRequestPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/adminConsentRequestPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/adminConsentRequestPolicy`
 *
 * Update the properties of an adminConsentRequestPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/adminConsentRequestPolicy']['body'],
  params?: IEndpoints['PATCH /policies/adminConsentRequestPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/adminConsentRequestPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/adminConsentRequestPolicy',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}': Operation<
    '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    'delete'
  >;
  'GET /reports/userCredentialUsageDetails': Operation<
    '/reports/userCredentialUsageDetails',
    'get'
  >;
  'GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}': Operation<
    '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    'get'
  >;
  'PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}': Operation<
    '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    'patch'
  >;
  'POST /reports/userCredentialUsageDetails': Operation<
    '/reports/userCredentialUsageDetails',
    'post'
  >;
}

/**
 * `DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userCredentialUsageDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/userCredentialUsageDetails`
 *
 * Get a list of userCredentialUsageDetails objects for a given tenant. Details include user information, status of the reset, and the reason for failure.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /reports/userCredentialUsageDetails']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userCredentialUsageDetails']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userCredentialUsageDetails',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}`
 *
 * Represents the self-service password reset (SSPR) usage for a given tenant.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userCredentialUsageDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['body'],
  params?: IEndpoints['PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    paramDefs: [{ name: 'userCredentialUsageDetails-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/userCredentialUsageDetails`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /reports/userCredentialUsageDetails']['body'],
  params?: IEndpoints['POST /reports/userCredentialUsageDetails']['parameters']
): EndpointRequest<IEndpoints['POST /reports/userCredentialUsageDetails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/userCredentialUsageDetails',
    paramDefs: [],
    params,
    body,
  };
}

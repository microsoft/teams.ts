import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}': Operation<
    '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    'delete'
  >;
  'GET /reports/credentialUserRegistrationDetails': Operation<
    '/reports/credentialUserRegistrationDetails',
    'get'
  >;
  'GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}': Operation<
    '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    'get'
  >;
  'PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}': Operation<
    '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    'patch'
  >;
  'POST /reports/credentialUserRegistrationDetails': Operation<
    '/reports/credentialUserRegistrationDetails',
    'post'
  >;
}

/**
 * `DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'credentialUserRegistrationDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/credentialUserRegistrationDetails`
 *
 * Get a list of credentialUserRegistrationDetails objects for a given tenant.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /reports/credentialUserRegistrationDetails']['parameters']
): EndpointRequest<IEndpoints['GET /reports/credentialUserRegistrationDetails']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/credentialUserRegistrationDetails',
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
 * `GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}`
 *
 * Details of the usage of self-service password reset and multifactor authentication (MFA) for all registered users.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'credentialUserRegistrationDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['body'],
  params?: IEndpoints['PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    paramDefs: [{ name: 'credentialUserRegistrationDetails-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/credentialUserRegistrationDetails`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /reports/credentialUserRegistrationDetails']['body'],
  params?: IEndpoints['POST /reports/credentialUserRegistrationDetails']['parameters']
): EndpointRequest<IEndpoints['POST /reports/credentialUserRegistrationDetails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/credentialUserRegistrationDetails',
    paramDefs: [],
    params,
    body,
  };
}

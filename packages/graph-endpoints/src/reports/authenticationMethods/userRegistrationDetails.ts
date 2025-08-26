import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}': Operation<
    '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    'delete'
  >;
  'GET /reports/authenticationMethods/userRegistrationDetails': Operation<
    '/reports/authenticationMethods/userRegistrationDetails',
    'get'
  >;
  'GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}': Operation<
    '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}': Operation<
    '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    'patch'
  >;
  'POST /reports/authenticationMethods/userRegistrationDetails': Operation<
    '/reports/authenticationMethods/userRegistrationDetails',
    'post'
  >;
}

/**
 * `DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['response']
> {
  return {
    method: 'delete',
    path: '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userRegistrationDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/authenticationMethods/userRegistrationDetails`
 *
 * Get a list of the authentication methods registered for a user as defined in the userRegistrationDetails object. This method doesn&#x27;t work for disabled users.
 */
export function list(
  params?: IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails']['response']
> {
  return {
    method: 'get',
    path: '/reports/authenticationMethods/userRegistrationDetails',
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
 * `GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}`
 *
 * Read the properties and relationships of a userRegistrationDetails object.
 */
export function get(
  params?: IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['response']
> {
  return {
    method: 'get',
    path: '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userRegistrationDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['body'],
  params?: IEndpoints['PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['response']
> {
  return {
    method: 'patch',
    path: '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    paramDefs: [{ name: 'userRegistrationDetails-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/authenticationMethods/userRegistrationDetails`
 *
 */
export function create(
  body: IEndpoints['POST /reports/authenticationMethods/userRegistrationDetails']['body'],
  params?: IEndpoints['POST /reports/authenticationMethods/userRegistrationDetails']['parameters']
): EndpointRequest<
  IEndpoints['POST /reports/authenticationMethods/userRegistrationDetails']['response']
> {
  return {
    method: 'post',
    path: '/reports/authenticationMethods/userRegistrationDetails',
    paramDefs: [],
    params,
    body,
  };
}

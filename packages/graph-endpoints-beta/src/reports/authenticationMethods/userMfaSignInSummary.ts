import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    'delete'
  >;
  'GET /reports/authenticationMethods/userMfaSignInSummary': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary',
    'get'
  >;
  'GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    'patch'
  >;
  'POST /reports/authenticationMethods/userMfaSignInSummary': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary',
    'post'
  >;
}

/**
 * `DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userMfaSignInSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/authenticationMethods/userMfaSignInSummary`
 *
 * Get the summary of MFA vs non-MFA sign-in events for a specified time window, as defined in the userMfaSignInSummary object.
 */
export function get(
  params?: IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/authenticationMethods/userMfaSignInSummary',
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
 * `GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}`
 *
 * Represents the total count of MFA vs non-MFA sign-in counts for a specified period.
 */
export function get$1(
  params?: IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userMfaSignInSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['body'],
  params?: IEndpoints['PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    paramDefs: [{ name: 'userMfaSignInSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/authenticationMethods/userMfaSignInSummary`
 *
 */
export function create(
  body: IEndpoints['POST /reports/authenticationMethods/userMfaSignInSummary']['body'],
  params?: IEndpoints['POST /reports/authenticationMethods/userMfaSignInSummary']['parameters']
): EndpointRequest<
  IEndpoints['POST /reports/authenticationMethods/userMfaSignInSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/authenticationMethods/userMfaSignInSummary',
    paramDefs: [],
    params,
    body,
  };
}

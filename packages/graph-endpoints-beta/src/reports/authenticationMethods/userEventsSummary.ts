import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}': Operation<
    '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    'delete'
  >;
  'GET /reports/authenticationMethods/userEventsSummary': Operation<
    '/reports/authenticationMethods/userEventsSummary',
    'get'
  >;
  'GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}': Operation<
    '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}': Operation<
    '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    'patch'
  >;
  'POST /reports/authenticationMethods/userEventsSummary': Operation<
    '/reports/authenticationMethods/userEventsSummary',
    'post'
  >;
}

/**
 * `DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userEventsSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/authenticationMethods/userEventsSummary`
 *
 * Get a list of the user SSPR and MFA registration and reset events as defined in the usereventssummary object.
 */
export function get(
  params?: IEndpoints['GET /reports/authenticationMethods/userEventsSummary']['parameters']
): EndpointRequest<IEndpoints['GET /reports/authenticationMethods/userEventsSummary']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/authenticationMethods/userEventsSummary',
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
 * `GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}`
 *
 * Represents a specific user MFA/SSPR registration or reset event, including whether the event was successful, which authentication method was targeted, and failure reason if any.
 */
export function get$1(
  params?: IEndpoints['GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userEventsSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['body'],
  params?: IEndpoints['PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    paramDefs: [{ name: 'userEventsSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/authenticationMethods/userEventsSummary`
 *
 */
export function create(
  body: IEndpoints['POST /reports/authenticationMethods/userEventsSummary']['body'],
  params?: IEndpoints['POST /reports/authenticationMethods/userEventsSummary']['parameters']
): EndpointRequest<
  IEndpoints['POST /reports/authenticationMethods/userEventsSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/authenticationMethods/userEventsSummary',
    paramDefs: [],
    params,
    body,
  };
}

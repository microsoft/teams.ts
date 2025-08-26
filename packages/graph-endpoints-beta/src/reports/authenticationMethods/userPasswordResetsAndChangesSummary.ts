import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    'delete'
  >;
  'GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
    'get'
  >;
  'GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    'patch'
  >;
  'POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
    'post'
  >;
}

/**
 * `DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userPasswordResetsAndChangesSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary`
 *
 * Gets a list of password resets and changes that occurred in a given aggregation window as defined in the userPasswordResetsAndChangesSummary object.
 */
export function get(
  params?: IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
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
 * `GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}`
 *
 * Represents the summary of password resets and changes for a specific day. This includes the number of password resets that were self-service and those triggered by an administrator.
 */
export function get$1(
  params?: IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userPasswordResetsAndChangesSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['body'],
  params?: IEndpoints['PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    paramDefs: [{ name: 'userPasswordResetsAndChangesSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary`
 *
 */
export function create(
  body: IEndpoints['POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['body'],
  params?: IEndpoints['POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['parameters']
): EndpointRequest<
  IEndpoints['POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
    paramDefs: [],
    params,
    body,
  };
}

export * as policies from './policies';
export * as servicePrincipal from './servicePrincipal';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    'delete'
  >;
  'GET /networkAccess/forwardingProfiles': Operation<'/networkAccess/forwardingProfiles', 'get'>;
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    'get'
  >;
  'PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    'patch'
  >;
  'POST /networkAccess/forwardingProfiles': Operation<'/networkAccess/forwardingProfiles', 'post'>;
}

/**
 * `DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'forwardingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/forwardingProfiles`
 *
 * Retrieve a list of forwarding profiles.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/forwardingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles',
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
 * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}`
 *
 * Retrieve information about a specific forwarding profile.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'forwardingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}`
 *
 * Update an existing forwarding profile.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: [{ name: 'forwardingProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/forwardingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/forwardingProfiles']['body'],
  params?: IEndpoints['POST /networkAccess/forwardingProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/forwardingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/forwardingProfiles',
    paramDefs: [],
    params,
    body,
  };
}

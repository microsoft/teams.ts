export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles',
    'get'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles',
    'post'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    'get'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['remoteNetwork-id', 'forwardingProfile-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles`
 *
 * Each forwarding profile associated with a remote network is specified. Supports $expand and $select.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles',
    paramDefs: {
      path: ['remoteNetwork-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}`
 *
 * Each forwarding profile associated with a remote network is specified. Supports $expand and $select.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      path: ['remoteNetwork-id', 'forwardingProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      path: ['remoteNetwork-id', 'forwardingProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles',
    paramDefs: {
      path: ['remoteNetwork-id'],
    },
    params,
    body,
  };
}

export const servicePrincipal = {
  /**
   * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal`
   *
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['remoteNetwork-id', 'forwardingProfile-id'],
      },
      params,
    };
  },
};

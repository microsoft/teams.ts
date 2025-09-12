export * as jobs from './jobs';
export * as templates from './templates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization',
    'get'
  >;
  'PUT /servicePrincipals/{servicePrincipal-id}/synchronization': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization',
    'put'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken',
    'post'
  >;
  'PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/secrets',
    'put'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization',
    paramDefs: {
      header: ['If-Match'],
      path: ['servicePrincipal-id'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization`
 *
 * Represents the capability for Microsoft Entra identity synchronization through the Microsoft Graph API.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization',
    paramDefs: {
      path: ['servicePrincipal-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /servicePrincipals/{servicePrincipal-id}/synchronization`
 *
 */
export function set(
  body: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization']['body'],
  params?: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization',
    paramDefs: {
      path: ['servicePrincipal-id'],
    },
    params,
    body,
  };
}

export const acquireAccessToken = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken`
   *
   * Acquire an OAuth Access token to authorize the Microsoft Entra provisioning service to provision users into an application.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

export const secrets = {
  /**
   * `PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets`
   *
   * Provide credentials for establishing connectivity with the target system.
   */
  set: function set(
    body: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets']['body'],
    params?: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/secrets',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};

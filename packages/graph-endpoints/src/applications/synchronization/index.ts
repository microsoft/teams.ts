export * as jobs from './jobs';
export * as templates from './templates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization': Operation<
    '/applications/{application-id}/synchronization',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization': Operation<
    '/applications/{application-id}/synchronization',
    'get'
  >;
  'PUT /applications/{application-id}/synchronization': Operation<
    '/applications/{application-id}/synchronization',
    'put'
  >;
  'POST /applications/{application-id}/synchronization/acquireAccessToken': Operation<
    '/applications/{application-id}/synchronization/acquireAccessToken',
    'post'
  >;
  'PUT /applications/{application-id}/synchronization/secrets': Operation<
    '/applications/{application-id}/synchronization/secrets',
    'put'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization']['response']
> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/synchronization',
    paramDefs: {
      header: ['If-Match'],
      path: ['application-id'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization`
 *
 * Represents the capability for Microsoft Entra identity synchronization through the Microsoft Graph API.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}/synchronization']['response']> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization',
    paramDefs: {
      path: ['application-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /applications/{application-id}/synchronization`
 *
 */
export function set(
  body: IEndpoints['PUT /applications/{application-id}/synchronization']['body'],
  params?: IEndpoints['PUT /applications/{application-id}/synchronization']['parameters']
): EndpointRequest<IEndpoints['PUT /applications/{application-id}/synchronization']['response']> {
  return {
    method: 'put',
    path: '/applications/{application-id}/synchronization',
    paramDefs: {
      path: ['application-id'],
    },
    params,
    body,
  };
}

export const acquireAccessToken = {
  /**
   * `POST /applications/{application-id}/synchronization/acquireAccessToken`
   *
   * Acquire an OAuth access token to authorize the Microsoft Entra provisioning service to provision users into an application.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['body'],
    params?: IEndpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/synchronization/acquireAccessToken',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const secrets = {
  /**
   * `PUT /applications/{application-id}/synchronization/secrets`
   *
   */
  set: function set(
    body: IEndpoints['PUT /applications/{application-id}/synchronization/secrets']['body'],
    params?: IEndpoints['PUT /applications/{application-id}/synchronization/secrets']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /applications/{application-id}/synchronization/secrets']['response']
  > {
    return {
      method: 'put',
      path: '/applications/{application-id}/synchronization/secrets',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

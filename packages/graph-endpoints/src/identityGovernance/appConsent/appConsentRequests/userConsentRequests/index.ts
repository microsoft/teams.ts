export * as approval from './approval';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'delete'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests',
    'get'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'get'
  >;
  'PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'patch'
  >;
  'POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests`
 *
 * Retrieve a collection of userConsentRequest objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests',
    paramDefs: {
      path: ['appConsentRequest-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 * Read the properties and relationships of a userConsentRequest object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: {
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: {
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests']['body'],
  params?: IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests',
    paramDefs: {
      path: ['appConsentRequest-id'],
    },
    params,
    body,
  };
}

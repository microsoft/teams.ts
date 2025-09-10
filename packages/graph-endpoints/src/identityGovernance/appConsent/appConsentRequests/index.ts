export * as userConsentRequests from './userConsentRequests';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}',
    'delete'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests': Operation<
    '/identityGovernance/appConsent/appConsentRequests',
    'get'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}',
    'get'
  >;
  'PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}',
    'patch'
  >;
  'POST /identityGovernance/appConsent/appConsentRequests': Operation<
    '/identityGovernance/appConsent/appConsentRequests',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['appConsentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/appConsent/appConsentRequests`
 *
 * Retrieve appConsentRequest objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/appConsent/appConsentRequests']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/appConsent/appConsentRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}`
 *
 * Read the properties and relationships of an appConsentRequest object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}',
    paramDefs: {
      path: ['appConsentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}',
    paramDefs: {
      path: ['appConsentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/appConsent/appConsentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/appConsent/appConsentRequests']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/appConsent/appConsentRequests']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/appConsent/appConsentRequests',
    body,
  };
}

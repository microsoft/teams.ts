export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/approvers',
    'get'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}',
    'get'
  >;
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers`
 *
 * Collection of users who can approve the request. Currently only supported for requests of type delete.
 */
export function list(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers']['response']
> {
  return {
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/approvers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}`
 *
 * Collection of users who can approve the request. Currently only supported for requests of type delete.
 */
export function get(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

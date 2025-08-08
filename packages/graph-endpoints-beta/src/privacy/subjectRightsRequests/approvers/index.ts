export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers',
    'get'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}',
    'get'
  >;
}

/**
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers',
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
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

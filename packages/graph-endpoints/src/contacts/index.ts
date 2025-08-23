export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as directReports from './directReports';
export * as getAvailableExtensionProperties from './getAvailableExtensionProperties';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as manager from './manager';
export * as memberOf from './memberOf';
export * as restore from './restore';
export * as retryServiceProvisioning from './retryServiceProvisioning';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /contacts': Operation<'/contacts', 'get'>;
  'GET /contacts/{orgContact-id}': Operation<'/contacts/{orgContact-id}', 'get'>;
}

/**
 * `GET /contacts`
 *
 * Get the list of organizational contacts for this organization.
 */
export function list(
  params?: IEndpoints['GET /contacts']['parameters']
): EndpointRequest<IEndpoints['GET /contacts']['response']> {
  return {
    method: 'get',
    path: '/contacts',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
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
 * `GET /contacts/{orgContact-id}`
 *
 * Get the properties and relationships of an organizational contact.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}']['response']> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
    ],
    params,
  };
}

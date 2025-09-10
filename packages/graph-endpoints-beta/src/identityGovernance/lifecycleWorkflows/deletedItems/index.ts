export * as workflows from './workflows';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/lifecycleWorkflows/deletedItems': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/lifecycleWorkflows/deletedItems`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems`
 *
 * Deleted workflows in your lifecycle workflows instance.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

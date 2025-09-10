import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}': Operation<
    '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}',
    'delete'
  >;
  'GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions': Operation<
    '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions',
    'get'
  >;
  'GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}': Operation<
    '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}': Operation<
    '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}',
    'patch'
  >;
  'POST /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions': Operation<
    '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions',
    'post'
  >;
  'GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}/authorizationSystem': Operation<
    '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}/authorizationSystem',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['permissionsCreepIndexDistribution-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions`
 *
 * Represents the Permissions Creep Index (PCI) for the authorization system. PCI distribution chart shows the classification of human and nonhuman identities based on the PCI score in three buckets (low, medium, high).
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}`
 *
 * Represents the Permissions Creep Index (PCI) for the authorization system. PCI distribution chart shows the classification of human and nonhuman identities based on the PCI score in three buckets (low, medium, high).
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}',
    paramDefs: {
      path: ['permissionsCreepIndexDistribution-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}',
    paramDefs: {
      path: ['permissionsCreepIndexDistribution-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions',
    body,
  };
}

export const authorizationSystem = {
  /**
   * `GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}/authorizationSystem`
   *
   * Represents an authorization system onboarded to Permissions Management.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}/authorizationSystem']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}/authorizationSystem']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsAnalytics/azure/permissionsCreepIndexDistributions/{permissionsCreepIndexDistribution-id}/authorizationSystem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['permissionsCreepIndexDistribution-id'],
      },
      params,
    };
  },
};

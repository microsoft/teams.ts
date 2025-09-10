import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}',
    'patch'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents',
    'post'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}/agentGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}/agentGroups',
    'get'
  >;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onPremisesPublishingProfile-id', 'onPremisesAgent-id'],
    },
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents`
 *
 * List of existing onPremisesAgent objects. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}`
 *
 * List of existing onPremisesAgent objects. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id', 'onPremisesAgent-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}']['body'],
  params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id', 'onPremisesAgent-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents']['body'],
  params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents']['parameters']
): EndpointRequest<
  IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id'],
    },
    params,
    body,
  };
}

export const agentGroups = {
  /**
   * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}/agentGroups`
   *
   * List of onPremisesAgentGroups that an onPremisesAgent is assigned to. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}/agentGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}/agentGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agents/{onPremisesAgent-id}/agentGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onPremisesPublishingProfile-id', 'onPremisesAgent-id'],
      },
      params,
    };
  },
};

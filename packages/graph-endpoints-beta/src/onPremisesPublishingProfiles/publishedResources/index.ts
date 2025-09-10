import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    'patch'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
    'post'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups',
    'get'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups',
    'post'
  >;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onPremisesPublishingProfile-id', 'publishedResource-id'],
    },
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources`
 *
 * Retrieve a list of publishedResource objects.
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}`
 *
 * List of existing publishedResource objects. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id', 'publishedResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['body'],
  params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id', 'publishedResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['body'],
  params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id'],
    },
    params,
    body,
  };
}

export const agentGroups = {
  /**
   * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups`
   *
   * List of onPremisesAgentGroups that a publishedResource is assigned to. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onPremisesPublishingProfile-id', 'publishedResource-id'],
      },
      params,
    };
  },
  /**
   * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups']['body'],
    params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups',
      paramDefs: {
        path: ['onPremisesPublishingProfile-id', 'publishedResource-id'],
      },
      params,
      body,
    };
  },
};

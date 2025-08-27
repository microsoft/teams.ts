import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups',
    'get'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups',
    'post'
  >;
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups`
 *
 * List of onPremisesAgentGroups that a publishedResource is assigned to. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'onPremisesAgentGroup-id', in: 'path' },
      { name: 'publishedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups']['body'],
  params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}/publishedResources/{publishedResource-id}/agentGroups',
    paramDefs: [
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'onPremisesAgentGroup-id', in: 'path' },
      { name: 'publishedResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

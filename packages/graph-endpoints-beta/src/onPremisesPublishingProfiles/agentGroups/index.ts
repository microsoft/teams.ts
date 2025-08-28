export * as agents from './agents';
export * as publishedResources from './publishedResources';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}',
    'patch'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups',
    'post'
  >;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'onPremisesAgentGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups`
 *
 * List of existing onPremisesAgentGroup objects. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups',
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
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}`
 *
 * List of existing onPremisesAgentGroup objects. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'onPremisesAgentGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}']['body'],
  params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups/{onPremisesAgentGroup-id}',
    paramDefs: [
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'onPremisesAgentGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups']['body'],
  params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/agentGroups',
    paramDefs: [{ name: 'onPremisesPublishingProfile-id', in: 'path' }],
    params,
    body,
  };
}

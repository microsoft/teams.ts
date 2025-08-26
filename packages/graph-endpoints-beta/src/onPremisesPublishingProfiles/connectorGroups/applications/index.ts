export * as logo from './logo';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}',
    'get'
  >;
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications`
 *
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications',
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
      { name: 'connectorGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'connectorGroup-id', in: 'path' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

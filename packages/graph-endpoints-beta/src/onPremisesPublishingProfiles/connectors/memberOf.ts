import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf',
    'get'
  >;
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf`
 *
 * The connectorGroup that the connector is a member of. Read-only.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf',
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
      { name: 'connector-id', in: 'path' },
    ],
    params,
  };
}

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}',
    'get'
  >;
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments`
 *
 * Represents the segment configurations that are allowed for an on-premises non-web application published through Microsoft Entra application proxy.
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments',
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
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}`
 *
 * Represents the segment configurations that are allowed for an on-premises non-web application published through Microsoft Entra application proxy.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'ipApplicationSegment-id', in: 'path' },
    ],
    params,
  };
}

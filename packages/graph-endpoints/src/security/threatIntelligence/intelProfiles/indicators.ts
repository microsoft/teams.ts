import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators',
    'get'
  >;
  'GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators`
 *
 * Get the intelligenceProfileIndicator resources from the indicators navigation property of an intelligenceProfile.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intelligenceProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}`
 *
 * Includes an assemblage of high-fidelity network indicators of compromise.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intelligenceProfile-id', in: 'path' },
      { name: 'intelligenceProfileIndicator-id', in: 'path' },
    ],
    params,
  };
}

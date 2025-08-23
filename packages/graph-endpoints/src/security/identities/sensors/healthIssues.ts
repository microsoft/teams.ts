import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/identities/sensors/{sensor-id}/healthIssues': Operation<
    '/security/identities/sensors/{sensor-id}/healthIssues',
    'get'
  >;
  'GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}',
    'get'
  >;
}

/**
 * `GET /security/identities/sensors/{sensor-id}/healthIssues`
 *
 * Represents potential issues within a customer&#x27;s Microsoft Defender for Identity configuration that Microsoft Defender for Identity identified related to the sensor.
 */
export function list(
  params?: IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues']['response']
> {
  return {
    method: 'get',
    path: '/security/identities/sensors/{sensor-id}/healthIssues',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}`
 *
 * Represents potential issues within a customer&#x27;s Microsoft Defender for Identity configuration that Microsoft Defender for Identity identified related to the sensor.
 */
export function get(
  params?: IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensor-id', in: 'path' },
      { name: 'healthIssue-id', in: 'path' },
    ],
    params,
  };
}

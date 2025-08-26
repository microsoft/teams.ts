export * as comments from './comments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/incidents/{incident-id}/alerts': Operation<
    '/security/incidents/{incident-id}/alerts',
    'get'
  >;
  'GET /security/incidents/{incident-id}/alerts/{alert-id}': Operation<
    '/security/incidents/{incident-id}/alerts/{alert-id}',
    'get'
  >;
}

/**
 * `GET /security/incidents/{incident-id}/alerts`
 *
 * The list of related alerts. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /security/incidents/{incident-id}/alerts']['parameters']
): EndpointRequest<IEndpoints['GET /security/incidents/{incident-id}/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/incidents/{incident-id}/alerts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'incident-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/incidents/{incident-id}/alerts/{alert-id}`
 *
 * The list of related alerts. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /security/incidents/{incident-id}/alerts/{alert-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/incidents/{incident-id}/alerts/{alert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/incidents/{incident-id}/alerts/{alert-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'incident-id', in: 'path' },
      { name: 'alert-id', in: 'path' },
    ],
    params,
  };
}

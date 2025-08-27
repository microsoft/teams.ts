import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /contacts/{orgContact-id}/directReports': Operation<
    '/contacts/{orgContact-id}/directReports',
    'get'
  >;
  'GET /contacts/{orgContact-id}/directReports/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/directReports/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /contacts/{orgContact-id}/directReports`
 *
 * Get the direct reports for this organizational contact.
 */
export function list(
  params?: IEndpoints['GET /contacts/{orgContact-id}/directReports']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/directReports']['response']> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}/directReports',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /contacts/{orgContact-id}/directReports/{directoryObject-id}`
 *
 * The contact&#x27;s direct reports. (The users and contacts that have their manager property set to this contact.)  Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}/directReports/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /contacts/{orgContact-id}/directReports/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}/directReports/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}

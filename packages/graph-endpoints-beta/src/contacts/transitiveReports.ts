import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /contacts/{orgContact-id}/transitiveReports': Operation<
    '/contacts/{orgContact-id}/transitiveReports',
    'get'
  >;
  'GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/transitiveReports/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /contacts/{orgContact-id}/transitiveReports`
 *
 * Retrieve a count of transitive reports for an organizational contact.
 */
export function list(
  params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveReports']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/transitiveReports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/contacts/{orgContact-id}/transitiveReports',
    paramDefs: [
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
 * `GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}`
 *
 * The transitive reports for a contact. Read-only.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/contacts/{orgContact-id}/transitiveReports/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}

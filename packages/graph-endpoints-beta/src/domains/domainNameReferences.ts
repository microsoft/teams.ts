import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /domains/{domain-id}/domainNameReferences': Operation<
    '/domains/{domain-id}/domainNameReferences',
    'get'
  >;
  'GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}': Operation<
    '/domains/{domain-id}/domainNameReferences/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /domains/{domain-id}/domainNameReferences`
 *
 * Retrieve a list of directoryObject with a reference to the domain. The returned list will contain all directory objects that have a dependency on the domain.
 */
export function list(
  params?: IEndpoints['GET /domains/{domain-id}/domainNameReferences']['parameters']
): EndpointRequest<IEndpoints['GET /domains/{domain-id}/domainNameReferences']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/domainNameReferences',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}`
 *
 * The objects such as users and groups that reference the domain ID. Read-only, Nullable. Does not support $expand. Supports $filter by the OData type of objects returned. For example, /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group.
 */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/domainNameReferences/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}

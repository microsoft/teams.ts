import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/owners': Operation<
    '/servicePrincipals/{servicePrincipal-id}/owners',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/owners`
 *
 * Directory objects that are owners of this servicePrincipal. The owners are a set of nonadmin users or servicePrincipals who are allowed to modify this object. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/owners']['parameters']
): EndpointRequest<IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/owners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/owners',
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
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

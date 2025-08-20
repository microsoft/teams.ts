import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
    params,
  };
}

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createdByUser/serviceProvisioningErrors': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createdByUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createdByUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createdByUser/serviceProvisioningErrors']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createdByUser/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

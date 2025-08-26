export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/shares/{printerShare-id}/allowedGroups': Operation<
    '/print/shares/{printerShare-id}/allowedGroups',
    'get'
  >;
}

/**
 * `GET /print/shares/{printerShare-id}/allowedGroups`
 *
 * Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/allowedGroups']['parameters']
): EndpointRequest<IEndpoints['GET /print/shares/{printerShare-id}/allowedGroups']['response']> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/allowedGroups',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}

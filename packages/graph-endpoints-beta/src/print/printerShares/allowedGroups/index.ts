export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/allowedGroups': Operation<
    '/print/printerShares/{printerShare-id}/allowedGroups',
    'get'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/allowedGroups`
 *
 * The groups whose users have access to print using the printer.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/allowedGroups',
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

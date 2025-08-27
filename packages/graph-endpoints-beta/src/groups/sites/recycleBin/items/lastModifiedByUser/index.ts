export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser': Operation<
    '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

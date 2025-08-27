export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/items/{listItem-id}/lastModifiedByUser': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/lastModifiedByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

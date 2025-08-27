export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

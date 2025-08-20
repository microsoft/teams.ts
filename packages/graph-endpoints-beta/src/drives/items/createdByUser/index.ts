export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/createdByUser': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createdByUser',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/createdByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

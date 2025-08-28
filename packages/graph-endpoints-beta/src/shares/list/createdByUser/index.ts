export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/createdByUser': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/createdByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

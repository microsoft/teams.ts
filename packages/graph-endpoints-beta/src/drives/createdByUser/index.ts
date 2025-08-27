export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/createdByUser': Operation<'/drives/{drive-id}/createdByUser', 'get'>;
}

/**
 * `GET /drives/{drive-id}/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/createdByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/createdByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

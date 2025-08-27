export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/lastModifiedByUser': Operation<
    '/drives/{drive-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/lastModifiedByUser']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/lastModifiedByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

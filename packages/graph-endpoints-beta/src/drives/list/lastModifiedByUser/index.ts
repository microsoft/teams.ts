export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/lastModifiedByUser': Operation<
    '/drives/{drive-id}/list/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/createdByUser': Operation<
    '/drives/{drive-id}/list/createdByUser',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/createdByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/createdByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

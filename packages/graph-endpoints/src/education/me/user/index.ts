export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/user': Operation<'/education/me/user', 'get'>;
}

/**
 * `GET /education/me/user`
 *
 * Retrieve the simple directory user that corresponds to this educationUser.
 */
export function get(
  params?: IEndpoints['GET /education/me/user']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/user']['response']> {
  return {
    method: 'get',
    path: '/education/me/user',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

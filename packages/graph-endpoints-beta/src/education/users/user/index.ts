export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/users/{educationUser-id}/user': Operation<
    '/education/users/{educationUser-id}/user',
    'get'
  >;
}

/**
 * `GET /education/users/{educationUser-id}/user`
 *
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/user']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/user']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/user',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
    ],
    params,
  };
}

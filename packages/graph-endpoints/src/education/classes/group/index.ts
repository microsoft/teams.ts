export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/group': Operation<
    '/education/classes/{educationClass-id}/group',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/group`
 *
 * The underlying Microsoft 365 group object.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/group']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/group']['response']> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

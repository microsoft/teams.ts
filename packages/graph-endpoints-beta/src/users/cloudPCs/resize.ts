import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/resize',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize`
 *
 * Upgrade or downgrade an existing Cloud PC to a configuration with a new virtual CPU (vCPU) and storage size.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}/resize',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
    body,
  };
}

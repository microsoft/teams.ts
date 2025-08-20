import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/restore',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore`
 *
 * Restore a specific Cloud PC. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}/restore',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
    body,
  };
}

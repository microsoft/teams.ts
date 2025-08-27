import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot`
 *
 * Create a snapshot for a specific Cloud PC device.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
    body,
  };
}

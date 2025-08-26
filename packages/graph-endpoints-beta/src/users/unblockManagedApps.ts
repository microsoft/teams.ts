import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/unblockManagedApps': Operation<
    '/users/{user-id}/unblockManagedApps',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/unblockManagedApps`
 *
 * Unblocks the managed app user from app check-in.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/unblockManagedApps']['body'],
  params?: IEndpoints['POST /users/{user-id}/unblockManagedApps']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/unblockManagedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/unblockManagedApps',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

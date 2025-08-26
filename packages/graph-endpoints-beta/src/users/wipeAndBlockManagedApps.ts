import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/wipeAndBlockManagedApps': Operation<
    '/users/{user-id}/wipeAndBlockManagedApps',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/wipeAndBlockManagedApps`
 *
 * Blocks the managed app user from app check-in.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/wipeAndBlockManagedApps']['body'],
  params?: IEndpoints['POST /users/{user-id}/wipeAndBlockManagedApps']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/wipeAndBlockManagedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/wipeAndBlockManagedApps',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

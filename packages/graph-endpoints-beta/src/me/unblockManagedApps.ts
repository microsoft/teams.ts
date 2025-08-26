import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/unblockManagedApps': Operation<'/me/unblockManagedApps', 'post'>;
}

/**
 * `POST /me/unblockManagedApps`
 *
 * Unblocks the managed app user from app check-in.
 */
export function create(
  body: IEndpoints['POST /me/unblockManagedApps']['body'],
  params?: IEndpoints['POST /me/unblockManagedApps']['parameters']
): EndpointRequest<IEndpoints['POST /me/unblockManagedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/unblockManagedApps',
    paramDefs: [],
    params,
    body,
  };
}

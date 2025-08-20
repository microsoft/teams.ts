import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/wipeAndBlockManagedApps': Operation<'/me/wipeAndBlockManagedApps', 'post'>;
}

/**
 * `POST /me/wipeAndBlockManagedApps`
 *
 * Blocks the managed app user from app check-in.
 */
export function create(
  body: IEndpoints['POST /me/wipeAndBlockManagedApps']['body'],
  params?: IEndpoints['POST /me/wipeAndBlockManagedApps']['parameters']
): EndpointRequest<IEndpoints['POST /me/wipeAndBlockManagedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/wipeAndBlockManagedApps',
    paramDefs: [],
    params,
    body,
  };
}

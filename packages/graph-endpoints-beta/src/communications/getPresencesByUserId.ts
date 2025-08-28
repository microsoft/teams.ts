import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /communications/getPresencesByUserId': Operation<
    '/communications/getPresencesByUserId',
    'post'
  >;
}

/**
 * `POST /communications/getPresencesByUserId`
 *
 * Get the presence information for multiple users.
 */
export function create(
  body: IEndpoints['POST /communications/getPresencesByUserId']['body'],
  params?: IEndpoints['POST /communications/getPresencesByUserId']['parameters']
): EndpointRequest<IEndpoints['POST /communications/getPresencesByUserId']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/getPresencesByUserId',
    paramDefs: [],
    params,
    body,
  };
}

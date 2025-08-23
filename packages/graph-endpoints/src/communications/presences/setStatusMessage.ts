import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/presences/{presence-id}/setStatusMessage': Operation<
    '/communications/presences/{presence-id}/setStatusMessage',
    'post'
  >;
}

/**
 * `POST /communications/presences/{presence-id}/setStatusMessage`
 *
 * Set a presence status message for a user. An optional expiration date and time can be supplied.
 */
export function create(
  body: IEndpoints['POST /communications/presences/{presence-id}/setStatusMessage']['body'],
  params?: IEndpoints['POST /communications/presences/{presence-id}/setStatusMessage']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/presences/{presence-id}/setStatusMessage']['response']
> {
  return {
    method: 'post',
    path: '/communications/presences/{presence-id}/setStatusMessage',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}

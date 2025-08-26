import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/presence/setStatusMessage': Operation<'/me/presence/setStatusMessage', 'post'>;
}

/**
 * `POST /me/presence/setStatusMessage`
 *
 * Set a presence status message for a user. An optional expiration date and time can be supplied.
 */
export function create(
  body: IEndpoints['POST /me/presence/setStatusMessage']['body'],
  params?: IEndpoints['POST /me/presence/setStatusMessage']['parameters']
): EndpointRequest<IEndpoints['POST /me/presence/setStatusMessage']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/presence/setStatusMessage',
    paramDefs: [],
    params,
    body,
  };
}

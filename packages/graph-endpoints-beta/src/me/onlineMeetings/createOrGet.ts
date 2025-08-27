import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/onlineMeetings/createOrGet': Operation<'/me/onlineMeetings/createOrGet', 'post'>;
}

/**
 * `POST /me/onlineMeetings/createOrGet`
 *
 * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/createOrGet']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/createOrGet']['parameters']
): EndpointRequest<IEndpoints['POST /me/onlineMeetings/createOrGet']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onlineMeetings/createOrGet',
    paramDefs: [],
    params,
    body,
  };
}

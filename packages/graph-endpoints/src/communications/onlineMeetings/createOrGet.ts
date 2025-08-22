import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/onlineMeetings/createOrGet': Operation<
    '/communications/onlineMeetings/createOrGet',
    'post'
  >;
}

/**
 * `POST /communications/onlineMeetings/createOrGet`
 *
 * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/createOrGet']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/createOrGet']['parameters']
): EndpointRequest<IEndpoints['POST /communications/onlineMeetings/createOrGet']['response']> {
  return {
    method: 'post',
    path: '/communications/onlineMeetings/createOrGet',
    paramDefs: [],
    params,
    body,
  };
}

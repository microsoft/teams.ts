import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/onlineMeetings/createOrGet': Operation<'/app/onlineMeetings/createOrGet', 'post'>;
}

/**
 * `POST /app/onlineMeetings/createOrGet`
 *
 * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
 */
export function create(
  body: IEndpoints['POST /app/onlineMeetings/createOrGet']['body'],
  params?: IEndpoints['POST /app/onlineMeetings/createOrGet']['parameters']
): EndpointRequest<IEndpoints['POST /app/onlineMeetings/createOrGet']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/onlineMeetings/createOrGet',
    paramDefs: [],
    params,
    body,
  };
}

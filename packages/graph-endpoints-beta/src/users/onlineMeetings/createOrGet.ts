import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/onlineMeetings/createOrGet': Operation<
    '/users/{user-id}/onlineMeetings/createOrGet',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/onlineMeetings/createOrGet`
 *
 * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onlineMeetings/createOrGet']['body'],
  params?: IEndpoints['POST /users/{user-id}/onlineMeetings/createOrGet']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onlineMeetings/createOrGet']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onlineMeetings/createOrGet',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

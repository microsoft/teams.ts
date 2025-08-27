import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/calendar/getSchedule': Operation<
    '/users/{user-id}/calendar/getSchedule',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/calendar/getSchedule`
 *
 * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendar/getSchedule']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendar/getSchedule']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/calendar/getSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendar/getSchedule',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

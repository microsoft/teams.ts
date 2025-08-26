import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule/startWorkingTime',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime`
 *
 * Trigger the policies associated with the start of working hours for a specific user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime']['body'],
  params?: IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/solutions/workingTimeSchedule/startWorkingTime',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

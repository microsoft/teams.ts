import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule/endWorkingTime',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime`
 *
 * Trigger the policies associated with the end of working hours for a specific user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime']['body'],
  params?: IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/solutions/workingTimeSchedule/endWorkingTime',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

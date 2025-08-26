import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/solutions/workingTimeSchedule/startWorkingTime': Operation<
    '/me/solutions/workingTimeSchedule/startWorkingTime',
    'post'
  >;
}

/**
 * `POST /me/solutions/workingTimeSchedule/startWorkingTime`
 *
 * Trigger the policies associated with the start of working hours for a specific user.
 */
export function create(
  body: IEndpoints['POST /me/solutions/workingTimeSchedule/startWorkingTime']['body'],
  params?: IEndpoints['POST /me/solutions/workingTimeSchedule/startWorkingTime']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/solutions/workingTimeSchedule/startWorkingTime']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/solutions/workingTimeSchedule/startWorkingTime',
    paramDefs: [],
    params,
    body,
  };
}

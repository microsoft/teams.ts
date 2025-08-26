import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/solutions/workingTimeSchedule/endWorkingTime': Operation<
    '/me/solutions/workingTimeSchedule/endWorkingTime',
    'post'
  >;
}

/**
 * `POST /me/solutions/workingTimeSchedule/endWorkingTime`
 *
 * Trigger the policies associated with the end of working hours for a specific user.
 */
export function create(
  body: IEndpoints['POST /me/solutions/workingTimeSchedule/endWorkingTime']['body'],
  params?: IEndpoints['POST /me/solutions/workingTimeSchedule/endWorkingTime']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/solutions/workingTimeSchedule/endWorkingTime']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/solutions/workingTimeSchedule/endWorkingTime',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendar/getSchedule': Operation<'/me/calendar/getSchedule', 'post'>;
}

/**
 * `POST /me/calendar/getSchedule`
 *
 * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
 */
export function create(
  body: IEndpoints['POST /me/calendar/getSchedule']['body'],
  params?: IEndpoints['POST /me/calendar/getSchedule']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/getSchedule']['response']> {
  return {
    method: 'post',
    path: '/me/calendar/getSchedule',
    paramDefs: [],
    params,
    body,
  };
}

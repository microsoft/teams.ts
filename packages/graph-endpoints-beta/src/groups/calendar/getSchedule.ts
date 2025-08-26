import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/calendar/getSchedule': Operation<
    '/groups/{group-id}/calendar/getSchedule',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/calendar/getSchedule`
 *
 * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/getSchedule']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/getSchedule']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/calendar/getSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/calendar/getSchedule',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}

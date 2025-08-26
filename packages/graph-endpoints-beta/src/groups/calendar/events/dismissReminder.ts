import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/dismissReminder',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder`
 *
 * Dismiss a reminder that has been triggered for an event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/calendar/events/{event-id}/dismissReminder',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}

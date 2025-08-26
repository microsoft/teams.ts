import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/snoozeReminder',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder`
 *
 * Postpone a reminder for an event in a user calendar until a new time.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/calendar/events/{event-id}/snoozeReminder',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}

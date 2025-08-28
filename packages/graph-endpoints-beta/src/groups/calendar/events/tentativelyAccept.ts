import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/tentativelyAccept',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept`
 *
 * Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/calendar/events/{event-id}/tentativelyAccept',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}

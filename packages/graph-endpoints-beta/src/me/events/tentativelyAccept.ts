import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/events/{event-id}/tentativelyAccept': Operation<
    '/me/events/{event-id}/tentativelyAccept',
    'post'
  >;
}

/**
 * `POST /me/events/{event-id}/tentativelyAccept`
 *
 * Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
 */
export function create(
  body: IEndpoints['POST /me/events/{event-id}/tentativelyAccept']['body'],
  params?: IEndpoints['POST /me/events/{event-id}/tentativelyAccept']['parameters']
): EndpointRequest<IEndpoints['POST /me/events/{event-id}/tentativelyAccept']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/events/{event-id}/tentativelyAccept',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/events/{event-id}/decline': Operation<'/me/events/{event-id}/decline', 'post'>;
}

/**
 * `POST /me/events/{event-id}/decline`
 *
 * Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
 */
export function create(
  body: IEndpoints['POST /me/events/{event-id}/decline']['body'],
  params?: IEndpoints['POST /me/events/{event-id}/decline']['parameters']
): EndpointRequest<IEndpoints['POST /me/events/{event-id}/decline']['response']> {
  return {
    method: 'post',
    path: '/me/events/{event-id}/decline',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}

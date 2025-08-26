import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/events/{event-id}/forward': Operation<'/me/events/{event-id}/forward', 'post'>;
}

/**
  * `POST /me/events/{event-id}/forward`
  *
  * This action allows the organizer or attendee of a meeting event to forward the
meeting request to a new recipient. If the meeting event is forwarded from an attendee&#x27;s Microsoft 365 mailbox to another recipient, this action
also sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer&#x27;s
copy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.
  */
export function create(
  body: IEndpoints['POST /me/events/{event-id}/forward']['body'],
  params?: IEndpoints['POST /me/events/{event-id}/forward']['parameters']
): EndpointRequest<IEndpoints['POST /me/events/{event-id}/forward']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/events/{event-id}/forward',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}

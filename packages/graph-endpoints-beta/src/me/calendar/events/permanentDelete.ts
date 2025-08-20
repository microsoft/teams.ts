import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendar/events/{event-id}/permanentDelete': Operation<
    '/me/calendar/events/{event-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/calendar/events/{event-id}/permanentDelete`
 *
 * Permanently delete an event and place it in the Purges folder in the dumpster in the user&#x27;s mailbox. Email clients such as Outlook or the Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 */
export function create(
  body: IEndpoints['POST /me/calendar/events/{event-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/calendar/events/{event-id}/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/events/{event-id}/permanentDelete']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendar/events/{event-id}/permanentDelete',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}

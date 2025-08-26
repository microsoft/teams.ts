import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/exchange/mailboxes/{mailbox-id}/exportItems': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/exportItems',
    'post'
  >;
}

/**
 * `POST /admin/exchange/mailboxes/{mailbox-id}/exportItems`
 *
 * Export Exchange mailboxItem objects in full fidelity. This API exports each item as an opaque stream. The data stream isn&#x27;t intended for parsing, but can be used to import an item back into an Exchange mailbox. For more information, see: Overview of the mailbox import and export APIs in Microsoft Graph (preview) You can export up to 20 items in a single export request.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/exportItems']['body'],
  params?: IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/exportItems']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/exportItems']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/mailboxes/{mailbox-id}/exportItems',
    paramDefs: [{ name: 'mailbox-id', in: 'path' }],
    params,
    body,
  };
}

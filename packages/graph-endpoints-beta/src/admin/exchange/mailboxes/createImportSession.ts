import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/createImportSession',
    'post'
  >;
}

/**
 * `POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession`
 *
 * Create a session to import an Exchange mailbox item that was exported using the exportItems API.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession']['body'],
  params?: IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/mailboxes/{mailbox-id}/createImportSession',
    paramDefs: [{ name: 'mailbox-id', in: 'path' }],
    params,
    body,
  };
}

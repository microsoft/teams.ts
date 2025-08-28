import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings': Operation<
    '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings': Operation<
    '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
    body,
  };
}

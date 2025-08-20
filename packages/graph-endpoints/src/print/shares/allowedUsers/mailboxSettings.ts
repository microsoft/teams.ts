import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings': Operation<
    '/print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings': Operation<
    '/print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['response']
> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
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
 * `PATCH /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['response']
> {
  return {
    method: 'patch',
    path: '/print/shares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
    body,
  };
}

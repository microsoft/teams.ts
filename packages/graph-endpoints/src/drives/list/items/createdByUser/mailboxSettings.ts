import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

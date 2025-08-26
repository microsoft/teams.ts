import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}

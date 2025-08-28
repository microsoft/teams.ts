import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}

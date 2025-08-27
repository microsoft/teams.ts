import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

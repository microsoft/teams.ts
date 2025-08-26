import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}

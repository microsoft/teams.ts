import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}

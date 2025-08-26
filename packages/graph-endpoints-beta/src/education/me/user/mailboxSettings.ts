import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/user/mailboxSettings': Operation<'/education/me/user/mailboxSettings', 'get'>;
  'PATCH /education/me/user/mailboxSettings': Operation<
    '/education/me/user/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /education/me/user/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /education/me/user/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/user/mailboxSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/user/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /education/me/user/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/user/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /education/me/user/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/me/user/mailboxSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me/user/mailboxSettings',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/mailboxSettings': Operation<'/users/{user-id}/mailboxSettings', 'get'>;
  'PATCH /users/{user-id}/mailboxSettings': Operation<'/users/{user-id}/mailboxSettings', 'patch'>;
}

/**
 * `GET /users/{user-id}/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/mailboxSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/mailboxSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/mailboxSettings',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

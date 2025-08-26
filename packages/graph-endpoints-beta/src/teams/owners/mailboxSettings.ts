import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/owners/{user-id}/mailboxSettings': Operation<
    '/teams/{team-id}/owners/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings': Operation<
    '/teams/{team-id}/owners/{user-id}/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /teams/{team-id}/owners/{user-id}/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/owners/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/owners/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/owners/{user-id}/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/owners/{user-id}/mailboxSettings',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
    body,
  };
}

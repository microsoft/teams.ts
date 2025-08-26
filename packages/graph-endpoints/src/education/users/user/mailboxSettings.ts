import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/users/{educationUser-id}/user/mailboxSettings': Operation<
    '/education/users/{educationUser-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/user/mailboxSettings': Operation<
    '/education/users/{educationUser-id}/user/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /education/users/{educationUser-id}/user/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/user/mailboxSettings']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/user/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/user/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/user/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/user/mailboxSettings']['response']
> {
  return {
    method: 'patch',
    path: '/education/users/{educationUser-id}/user/mailboxSettings',
    paramDefs: [{ name: 'educationUser-id', in: 'path' }],
    params,
    body,
  };
}

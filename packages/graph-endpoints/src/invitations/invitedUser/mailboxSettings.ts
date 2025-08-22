import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /invitations/invitedUser/mailboxSettings': Operation<
    '/invitations/invitedUser/mailboxSettings',
    'get'
  >;
  'PATCH /invitations/invitedUser/mailboxSettings': Operation<
    '/invitations/invitedUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /invitations/invitedUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /invitations/invitedUser/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['GET /invitations/invitedUser/mailboxSettings']['response']> {
  return {
    method: 'get',
    path: '/invitations/invitedUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /invitations/invitedUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /invitations/invitedUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /invitations/invitedUser/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /invitations/invitedUser/mailboxSettings']['response']> {
  return {
    method: 'patch',
    path: '/invitations/invitedUser/mailboxSettings',
    paramDefs: [],
    params,
    body,
  };
}

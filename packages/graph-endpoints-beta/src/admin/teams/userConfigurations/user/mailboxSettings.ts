import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsUserConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
    paramDefs: [{ name: 'teamsUserConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

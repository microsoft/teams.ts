import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    paramDefs: [
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

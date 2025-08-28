import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
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
 * `PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    paramDefs: [
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

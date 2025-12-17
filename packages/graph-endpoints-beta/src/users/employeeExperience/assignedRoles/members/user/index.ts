import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user',
    'get'
  >;
  'GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'patch'
  >;
  'GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user`
 *
 * The user who has this role assigned.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user',
    paramDefs: {
      path: ['user-id', 'engagementRole-id', 'engagementRoleMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'engagementRole-id', 'engagementRoleMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
      paramDefs: {
        path: ['user-id', 'engagementRole-id', 'engagementRoleMember-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'engagementRole-id', 'engagementRoleMember-id'],
      },
      params,
    };
  },
};

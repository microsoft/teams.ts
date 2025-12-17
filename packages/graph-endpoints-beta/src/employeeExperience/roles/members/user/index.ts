import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user',
    'get'
  >;
  'GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
    'patch'
  >;
  'GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user`
 *
 * The user who has this role assigned.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user',
    paramDefs: {
      path: ['engagementRole-id', 'engagementRoleMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['engagementRole-id', 'engagementRoleMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/mailboxSettings',
      paramDefs: {
        path: ['engagementRole-id', 'engagementRoleMember-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['engagementRole-id', 'engagementRoleMember-id'],
      },
      params,
    };
  },
};

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user',
    'get'
  >;
  'GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
    'patch'
  >;
  'GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user`
 *
 * Represents an Entra user account.
 */
export function get(
  params?: IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user',
    paramDefs: {
      path: ['teamsUserConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamsUserConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/mailboxSettings',
      paramDefs: {
        path: ['teamsUserConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['teamsUserConfiguration-id'],
      },
      params,
    };
  },
};

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/communities/{community-id}/owners': Operation<
    '/employeeExperience/communities/{community-id}/owners',
    'get'
  >;
  'GET /employeeExperience/communities/{community-id}/owners/{user-id}': Operation<
    '/employeeExperience/communities/{community-id}/owners/{user-id}',
    'get'
  >;
  'GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings': Operation<
    '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings': Operation<
    '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
    'patch'
  >;
  'GET /employeeExperience/communities/{community-id}/owners/{user-id}/serviceProvisioningErrors': Operation<
    '/employeeExperience/communities/{community-id}/owners/{user-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /employeeExperience/communities/{community-id}/owners`
 *
 * The admins of the community. Limited to 100 users. If this property isn&#x27;t specified when you create the community, the calling user is automatically assigned as the community owner.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}/owners']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/communities/{community-id}/owners']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/communities/{community-id}/owners',
    paramDefs: {
      path: ['community-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/communities/{community-id}/owners/{user-id}`
 *
 * The admins of the community. Limited to 100 users. If this property isn&#x27;t specified when you create the community, the calling user is automatically assigned as the community owner.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/communities/{community-id}/owners/{user-id}',
    paramDefs: {
      path: ['community-id', 'user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['community-id', 'user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
      paramDefs: {
        path: ['community-id', 'user-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /employeeExperience/communities/{community-id}/owners/{user-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/employeeExperience/communities/{community-id}/owners/{user-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['community-id', 'user-id'],
      },
      params,
    };
  },
};

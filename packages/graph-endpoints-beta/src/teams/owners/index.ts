import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/owners': Operation<'/teams/{team-id}/owners', 'get'>;
  'GET /teams/{team-id}/owners/{user-id}': Operation<'/teams/{team-id}/owners/{user-id}', 'get'>;
  'GET /teams/{team-id}/owners/{user-id}/mailboxSettings': Operation<
    '/teams/{team-id}/owners/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings': Operation<
    '/teams/{team-id}/owners/{user-id}/mailboxSettings',
    'patch'
  >;
  'GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors': Operation<
    '/teams/{team-id}/owners/{user-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/owners`
 *
 * The list of this team&#x27;s owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user-delegated permissions, no owner can be specified (the current user is the owner). The owner must be specified as an object ID (GUID), not a UPN.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/owners']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/owners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/owners',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/owners/{user-id}`
 *
 * The list of this team&#x27;s owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user-delegated permissions, no owner can be specified (the current user is the owner). The owner must be specified as an object ID (GUID), not a UPN.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/owners/{user-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/owners/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/owners/{user-id}',
    paramDefs: {
      path: ['team-id', 'user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /teams/{team-id}/owners/{user-id}/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/owners/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/owners/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/owners/{user-id}/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/owners/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/owners/{user-id}/mailboxSettings',
      paramDefs: {
        path: ['team-id', 'user-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/owners/{user-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'user-id'],
      },
      params,
    };
  },
};

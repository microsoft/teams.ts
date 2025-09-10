import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators',
    'get'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}',
    'get'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    'patch'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/serviceProvisioningErrors': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators`
 *
 */
export function list(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators',
    paramDefs: {
      path: ['subjectRightsRequest-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}',
    paramDefs: {
      path: ['subjectRightsRequest-id', 'user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['subjectRightsRequest-id', 'user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
      paramDefs: {
        path: ['subjectRightsRequest-id', 'user-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['subjectRightsRequest-id', 'user-id'],
      },
      params,
    };
  },
};

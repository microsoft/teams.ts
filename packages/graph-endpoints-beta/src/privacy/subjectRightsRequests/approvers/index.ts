import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers',
    'get'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}',
    'get'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings',
    'patch'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/serviceProvisioningErrors': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers',
    paramDefs: {
      path: ['subjectRightsRequest-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}',
    paramDefs: {
      path: ['subjectRightsRequest-id', 'user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['subjectRightsRequest-id', 'user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/mailboxSettings',
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
   * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/approvers/{user-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['subjectRightsRequest-id', 'user-id'],
      },
      params,
    };
  },
};

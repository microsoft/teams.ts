import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /invitations/invitedUser': Operation<'/invitations/invitedUser', 'get'>;
  'GET /invitations/invitedUser/mailboxSettings': Operation<
    '/invitations/invitedUser/mailboxSettings',
    'get'
  >;
  'PATCH /invitations/invitedUser/mailboxSettings': Operation<
    '/invitations/invitedUser/mailboxSettings',
    'patch'
  >;
  'GET /invitations/invitedUser/serviceProvisioningErrors': Operation<
    '/invitations/invitedUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /invitations/invitedUser`
 *
 * The user created as part of the invitation creation. Read-only. The id property is required in the request body to reset a redemption status.
 */
export function get(
  params?: IEndpoints['GET /invitations/invitedUser']['parameters']
): EndpointRequest<IEndpoints['GET /invitations/invitedUser']['response']> {
  return {
    method: 'get',
    path: '/invitations/invitedUser',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /invitations/invitedUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /invitations/invitedUser/mailboxSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /invitations/invitedUser/mailboxSettings']['response']> {
    return {
      method: 'get',
      path: '/invitations/invitedUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /invitations/invitedUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /invitations/invitedUser/mailboxSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /invitations/invitedUser/mailboxSettings']['response']> {
    return {
      method: 'patch',
      path: '/invitations/invitedUser/mailboxSettings',
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /invitations/invitedUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /invitations/invitedUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /invitations/invitedUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/invitations/invitedUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
};

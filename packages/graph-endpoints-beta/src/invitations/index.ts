export * as invitedUser from './invitedUser';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /invitations': Operation<'/invitations', 'get'>;
  'POST /invitations': Operation<'/invitations', 'post'>;
  'GET /invitations/invitedUserSponsors': Operation<'/invitations/invitedUserSponsors', 'get'>;
  'GET /invitations/invitedUserSponsors/{directoryObject-id}': Operation<
    '/invitations/invitedUserSponsors/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /invitations`
 *
 */
export function list(
  params?: IEndpoints['GET /invitations']['parameters']
): EndpointRequest<IEndpoints['GET /invitations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/invitations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /invitations`
 *
 * Create a new invitation or reset the redemption status for a guest user who already redeemed their invitation. The invitation adds the external user to the organization as part of B2B collaboration. B2B collaboration is supported in both Microsoft Entra External ID in workforce and external tenants. The following options are available for creating an invitation:
 */
export function create(
  body: IEndpoints['POST /invitations']['body']
): EndpointRequest<IEndpoints['POST /invitations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/invitations',
    body,
  };
}

export const invitedUserSponsors = {
  /**
   * `GET /invitations/invitedUserSponsors`
   *
   * The users or groups who are sponsors of the invited user. Sponsors are users and groups that are responsible for guest users&#x27; privileges in the tenant and for keeping the guest users&#x27; information and access up to date.
   */
  list: function list(
    params?: IEndpoints['GET /invitations/invitedUserSponsors']['parameters']
  ): EndpointRequest<IEndpoints['GET /invitations/invitedUserSponsors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/invitations/invitedUserSponsors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /invitations/invitedUserSponsors/{directoryObject-id}`
   *
   * The users or groups who are sponsors of the invited user. Sponsors are users and groups that are responsible for guest users&#x27; privileges in the tenant and for keeping the guest users&#x27; information and access up to date.
   */
  get: function get(
    params?: IEndpoints['GET /invitations/invitedUserSponsors/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /invitations/invitedUserSponsors/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/invitations/invitedUserSponsors/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

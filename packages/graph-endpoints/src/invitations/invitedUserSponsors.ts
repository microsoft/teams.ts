import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /invitations/invitedUserSponsors': Operation<'/invitations/invitedUserSponsors', 'get'>;
  'GET /invitations/invitedUserSponsors/{directoryObject-id}': Operation<
    '/invitations/invitedUserSponsors/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /invitations/invitedUserSponsors`
 *
 * The users or groups who are sponsors of the invited user. Sponsors are users and groups that are responsible for guest users&#x27; privileges in the tenant and for keeping the guest users&#x27; information and access up to date.
 */
export function list(
  params?: IEndpoints['GET /invitations/invitedUserSponsors']['parameters']
): EndpointRequest<IEndpoints['GET /invitations/invitedUserSponsors']['response']> {
  return {
    method: 'get',
    path: '/invitations/invitedUserSponsors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /invitations/invitedUserSponsors/{directoryObject-id}`
 *
 * The users or groups who are sponsors of the invited user. Sponsors are users and groups that are responsible for guest users&#x27; privileges in the tenant and for keeping the guest users&#x27; information and access up to date.
 */
export function get(
  params?: IEndpoints['GET /invitations/invitedUserSponsors/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /invitations/invitedUserSponsors/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/invitations/invitedUserSponsors/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}

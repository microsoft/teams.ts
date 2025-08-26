export * as invitedUser from './invitedUser';
export * as invitedUserSponsors from './invitedUserSponsors';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /invitations': Operation<'/invitations', 'get'>;
  'POST /invitations': Operation<'/invitations', 'post'>;
}

/**
 * `GET /invitations`
 *
 */
export function list(
  params?: IEndpoints['GET /invitations']['parameters']
): EndpointRequest<IEndpoints['GET /invitations']['response']> {
  return {
    method: 'get',
    path: '/invitations',
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
 * `POST /invitations`
 *
 * Use this API to create a new invitation or reset the redemption status for a guest user who already redeemed their invitation. The invitation adds the external user to the organization as part of B2B collaboration. B2B collaboration is supported in both Microsoft Entra External ID in workforce and external tenants. When creating a new invitation, you have several options available:
 */
export function create(
  body: IEndpoints['POST /invitations']['body'],
  params?: IEndpoints['POST /invitations']['parameters']
): EndpointRequest<IEndpoints['POST /invitations']['response']> {
  return {
    method: 'post',
    path: '/invitations',
    paramDefs: [],
    params,
    body,
  };
}

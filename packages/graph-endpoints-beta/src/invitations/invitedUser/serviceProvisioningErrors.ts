import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /invitations/invitedUser/serviceProvisioningErrors': Operation<
    '/invitations/invitedUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /invitations/invitedUser/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /invitations/invitedUser/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /invitations/invitedUser/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/invitations/invitedUser/serviceProvisioningErrors',
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

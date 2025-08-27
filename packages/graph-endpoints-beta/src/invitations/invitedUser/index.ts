export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /invitations/invitedUser': Operation<'/invitations/invitedUser', 'get'>;
}

/**
 * `GET /invitations/invitedUser`
 *
 * The user created as part of the invitation creation. Read-Only. The id property is required in the request body to reset a redemption status.
 */
export function get(
  params?: IEndpoints['GET /invitations/invitedUser']['parameters']
): EndpointRequest<IEndpoints['GET /invitations/invitedUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/invitations/invitedUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

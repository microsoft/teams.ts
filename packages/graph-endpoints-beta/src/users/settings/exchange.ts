import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/settings/exchange': Operation<'/users/{user-id}/settings/exchange', 'get'>;
}

/**
 * `GET /users/{user-id}/settings/exchange`
 *
 * Get a list of Exchange mailboxes that belong to a user. Currently, the mailbox types supported are the user&#x27;s primary mailbox and shared mailboxes. To learn how to get a list of users in a tenant, see List users.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/exchange']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/exchange',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

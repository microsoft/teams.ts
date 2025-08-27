export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/createdByUser': Operation<
    '/sites/{site-id}/lists/{list-id}/createdByUser',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/createdByUser`
 *
 * Identity of the user who created the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/createdByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

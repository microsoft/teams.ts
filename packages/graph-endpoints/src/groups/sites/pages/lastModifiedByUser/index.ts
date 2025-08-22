export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser': Operation<
    '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
    params,
  };
}

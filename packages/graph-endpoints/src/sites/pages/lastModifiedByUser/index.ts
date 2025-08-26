export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser': Operation<
    '/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
    params,
  };
}

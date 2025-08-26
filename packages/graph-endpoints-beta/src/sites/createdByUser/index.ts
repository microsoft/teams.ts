export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/createdByUser': Operation<'/sites/{site-id}/createdByUser', 'get'>;
}

/**
 * `GET /sites/{site-id}/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/createdByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/createdByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

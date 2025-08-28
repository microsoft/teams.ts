export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/recycleBin/lastModifiedByUser': Operation<
    '/sites/{site-id}/recycleBin/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/recycleBin/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/lastModifiedByUser']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/recycleBin/lastModifiedByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

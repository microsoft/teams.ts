export * as content from './content';
export * as contentStream from './contentStream';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem': Operation<
    '/drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

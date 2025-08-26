export * as content from './content';
export * as contentStream from './contentStream';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem`
 *
 * For document libraries, the driveItem relationship exposes the listItem as a driveItem
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

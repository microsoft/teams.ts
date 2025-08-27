export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem`
 *
 * For document libraries, the driveItem relationship exposes the listItem as a driveItem
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

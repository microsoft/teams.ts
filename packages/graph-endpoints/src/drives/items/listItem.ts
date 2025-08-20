import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/listItem': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/listItem',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/listItem`
 *
 * For drives in SharePoint, the associated document library list item. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/listItem']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/listItem']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/listItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

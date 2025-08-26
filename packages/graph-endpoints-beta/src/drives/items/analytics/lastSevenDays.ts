import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/lastSevenDays': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/lastSevenDays',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/lastSevenDays`
 *
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/lastSevenDays']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/lastSevenDays']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/lastSevenDays',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

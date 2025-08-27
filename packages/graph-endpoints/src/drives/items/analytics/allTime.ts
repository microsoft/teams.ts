import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/allTime': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/allTime',
    'get'
  >;
}

/**
  * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/allTime`
  *
  * Get itemAnalytics about the views that took place under this resource.
The itemAnalytics resource is a convenient way to get activity stats for allTime and the lastSevenDays.
For a custom time range or interval, use the getActivitiesByInterval API.
  */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/allTime']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/allTime']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/allTime',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

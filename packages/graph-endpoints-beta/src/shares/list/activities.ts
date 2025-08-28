import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/activities',
    'get'
  >;
  'POST /shares/{sharedDriveItem-id}/list/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/activities',
    'post'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/activities`
 *
 * The recent activities that took place within this list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/activities']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/activities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/activities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/activities`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/activities']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/activities']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/activities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/activities',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}

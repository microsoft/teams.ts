import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions`
 *
 * Column order information in a content type.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions',
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
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
 *
 * Column order information in a content type.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

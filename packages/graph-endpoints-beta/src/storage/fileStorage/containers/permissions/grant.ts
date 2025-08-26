import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/permissions/{permission-id}/grant': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/permissions/{permission-id}/grant',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/permissions/{permission-id}/grant`
 *
 * Grant users access to a link represented by a permission.
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/permissions/{permission-id}/grant']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/permissions/{permission-id}/grant']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/permissions/{permission-id}/grant']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/permissions/{permission-id}/grant',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}

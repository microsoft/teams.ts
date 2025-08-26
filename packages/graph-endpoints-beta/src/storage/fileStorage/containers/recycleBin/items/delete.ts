import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}

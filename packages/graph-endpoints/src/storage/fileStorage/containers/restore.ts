import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/restore',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/restore',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}

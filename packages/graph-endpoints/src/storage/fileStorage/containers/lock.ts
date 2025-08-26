import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/lock',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/lock',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}

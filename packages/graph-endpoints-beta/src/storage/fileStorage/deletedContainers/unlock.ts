import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}

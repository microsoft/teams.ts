import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate`
 *
 * Activate a fileStorageContainer object. A fileStorageContainer object is created in an inactive state, as indicated by the status property. A container that isn&#x27;t activated within 24 hours after creation is automatically deleted. Upon activation, the value of the status property changes from inactive to active. A file storage container can be activated by calling this API or any API that updates or modifies it or its content. For example, uploading a file to a file storage container activates it. It&#x27;s also activated when you add permissions to it or update them, or create a custom property on it.
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}

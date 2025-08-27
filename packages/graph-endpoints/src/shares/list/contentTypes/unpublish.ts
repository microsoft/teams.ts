import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish`
 *
 * Unpublish a contentType from a content type hub site.
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['response']
> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}

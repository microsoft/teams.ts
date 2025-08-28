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
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['response']
> {
  return {
    ver: 'beta',
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

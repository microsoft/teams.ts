import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}

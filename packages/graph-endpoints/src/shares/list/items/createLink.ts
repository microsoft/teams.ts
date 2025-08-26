import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink']['response']
> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

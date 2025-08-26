import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/addCopy',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/addCopy',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}

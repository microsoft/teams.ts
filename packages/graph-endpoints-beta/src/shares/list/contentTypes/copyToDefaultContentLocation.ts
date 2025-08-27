import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}

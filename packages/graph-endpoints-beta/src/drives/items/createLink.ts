import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/createLink': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createLink',
    'post'
  >;
}

/**
  * `POST /drives/{drive-id}/items/{driveItem-id}/createLink`
  *
  * Create a link to share a driveItem driveItem. The createLink action creates a new sharing link if the specified link type doesn&#x27;t already exist for the calling application.
If a sharing link of the specified type already exists for the app, the existing sharing link is returned. DriveItem resources inherit sharing permissions from their ancestors.
  */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createLink']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createLink']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createLink']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/createLink',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

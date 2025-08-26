import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/invite': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/invite',
    'post'
  >;
}

/**
  * `POST /drives/{drive-id}/items/{driveItem-id}/invite`
  *
  * Sends a sharing invitation for a driveItem.
A sharing invitation provides permissions to the recipients and optionally sends them an email with a sharing link.
  */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/invite',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

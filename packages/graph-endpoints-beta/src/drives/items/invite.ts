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
A sharing invitation provides permissions to the recipients and optionally sends an email to the recipients to notify them the item was shared.
  */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['response']> {
  return {
    ver: 'beta',
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

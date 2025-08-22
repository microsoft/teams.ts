import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/discardCheckout',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout`
 *
 * Discard the check out of a driveItem. This action releases a driveItem resource that was previously checked out. Any changes made to the item while it was checked out are discarded.  The same user that performed the checkout must discard it. Another alternative is to use application permissions.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/discardCheckout',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

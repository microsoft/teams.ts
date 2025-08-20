import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize`
 *
 * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
    body,
  };
}

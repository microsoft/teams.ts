import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize`
 *
 * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize']['response']
> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
    body,
  };
}

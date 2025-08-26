import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/synchronization/acquireAccessToken': Operation<
    '/applications/{application-id}/synchronization/acquireAccessToken',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/synchronization/acquireAccessToken`
 *
 * Acquire an OAuth access token to authorize the Microsoft Entra provisioning service to provision users into an application.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/acquireAccessToken',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'PUT /applications/{application-id}/synchronization/secrets': Operation<
    '/applications/{application-id}/synchronization/secrets',
    'put'
  >;
}

/**
 * `PUT /applications/{application-id}/synchronization/secrets`
 *
 */
export function set(
  body: IEndpoints['PUT /applications/{application-id}/synchronization/secrets']['body'],
  params?: IEndpoints['PUT /applications/{application-id}/synchronization/secrets']['parameters']
): EndpointRequest<
  IEndpoints['PUT /applications/{application-id}/synchronization/secrets']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/applications/{application-id}/synchronization/secrets',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

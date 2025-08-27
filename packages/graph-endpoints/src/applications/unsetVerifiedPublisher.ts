import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/unsetVerifiedPublisher': Operation<
    '/applications/{application-id}/unsetVerifiedPublisher',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/unsetVerifiedPublisher`
 *
 * Unset the verifiedPublisher previously set on an application, removing all verified publisher properties. For more information, see Publisher verification.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['body'],
  params?: IEndpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/unsetVerifiedPublisher',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

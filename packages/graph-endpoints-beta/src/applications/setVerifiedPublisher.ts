import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/setVerifiedPublisher': Operation<
    '/applications/{application-id}/setVerifiedPublisher',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/setVerifiedPublisher`
 *
 * Set the the verifiedPublisher on an application. For more information, including prerequisites to setting a verified publisher, see Publisher verification.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/setVerifiedPublisher']['body'],
  params?: IEndpoints['POST /applications/{application-id}/setVerifiedPublisher']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/setVerifiedPublisher']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/setVerifiedPublisher',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

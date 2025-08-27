import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/removeKey': Operation<
    '/applications/{application-id}/removeKey',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/removeKey`
 *
 * Remove a key credential from an application. This method along with addKey can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/removeKey']['body'],
  params?: IEndpoints['POST /applications/{application-id}/removeKey']['parameters']
): EndpointRequest<IEndpoints['POST /applications/{application-id}/removeKey']['response']> {
  return {
    method: 'post',
    path: '/applications/{application-id}/removeKey',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

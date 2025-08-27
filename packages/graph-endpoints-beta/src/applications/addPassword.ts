import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/addPassword': Operation<
    '/applications/{application-id}/addPassword',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/addPassword`
 *
 * Adds a strong password to an application. You can also add passwords while creating the application.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/addPassword']['body'],
  params?: IEndpoints['POST /applications/{application-id}/addPassword']['parameters']
): EndpointRequest<IEndpoints['POST /applications/{application-id}/addPassword']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/addPassword',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

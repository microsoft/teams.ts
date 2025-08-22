import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/removePassword': Operation<
    '/applications/{application-id}/removePassword',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/removePassword`
 *
 * Remove a password from an application.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/removePassword']['body'],
  params?: IEndpoints['POST /applications/{application-id}/removePassword']['parameters']
): EndpointRequest<IEndpoints['POST /applications/{application-id}/removePassword']['response']> {
  return {
    method: 'post',
    path: '/applications/{application-id}/removePassword',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

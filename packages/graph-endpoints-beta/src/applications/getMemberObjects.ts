import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/getMemberObjects': Operation<
    '/applications/{application-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /applications/{application-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /applications/{application-id}/getMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/getMemberObjects',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

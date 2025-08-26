import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/checkMemberObjects': Operation<
    '/applications/{application-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /applications/{application-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/checkMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/checkMemberObjects',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

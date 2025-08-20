import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/checkMemberObjects': Operation<
    '/users/{user-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /users/{user-id}/checkMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/checkMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/checkMemberObjects',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

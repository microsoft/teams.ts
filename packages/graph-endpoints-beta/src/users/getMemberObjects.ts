import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/getMemberObjects': Operation<'/users/{user-id}/getMemberObjects', 'post'>;
}

/**
 * `POST /users/{user-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /users/{user-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/getMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/getMemberObjects',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

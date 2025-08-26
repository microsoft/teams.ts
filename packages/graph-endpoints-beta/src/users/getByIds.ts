import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/getByIds': Operation<'/users/getByIds', 'post'>;
}

/**
 * `POST /users/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /users/getByIds']['body'],
  params?: IEndpoints['POST /users/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /users/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

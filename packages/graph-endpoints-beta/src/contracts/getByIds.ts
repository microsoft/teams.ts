import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/getByIds': Operation<'/contracts/getByIds', 'post'>;
}

/**
 * `POST /contracts/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /contracts/getByIds']['body'],
  params?: IEndpoints['POST /contracts/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/contracts/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

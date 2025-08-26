import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/getByIds': Operation<'/groups/getByIds', 'post'>;
}

/**
 * `POST /groups/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /groups/getByIds']['body'],
  params?: IEndpoints['POST /groups/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /groups/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

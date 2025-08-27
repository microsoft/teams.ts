import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/getByIds': Operation<'/applications/getByIds', 'post'>;
}

/**
 * `POST /applications/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /applications/getByIds']['body'],
  params?: IEndpoints['POST /applications/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /applications/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

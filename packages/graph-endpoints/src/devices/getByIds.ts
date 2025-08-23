import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /devices/getByIds': Operation<'/devices/getByIds', 'post'>;
}

/**
 * `POST /devices/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /devices/getByIds']['body'],
  params?: IEndpoints['POST /devices/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /devices/getByIds']['response']> {
  return {
    method: 'post',
    path: '/devices/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

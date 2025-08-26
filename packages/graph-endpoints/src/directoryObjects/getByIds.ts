import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryObjects/getByIds': Operation<'/directoryObjects/getByIds', 'post'>;
}

/**
 * `POST /directoryObjects/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /directoryObjects/getByIds']['body'],
  params?: IEndpoints['POST /directoryObjects/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /directoryObjects/getByIds']['response']> {
  return {
    method: 'post',
    path: '/directoryObjects/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/deletedItems/getByIds': Operation<'/directory/deletedItems/getByIds', 'post'>;
}

/**
 * `POST /directory/deletedItems/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /directory/deletedItems/getByIds']['body'],
  params?: IEndpoints['POST /directory/deletedItems/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /directory/deletedItems/getByIds']['response']> {
  return {
    method: 'post',
    path: '/directory/deletedItems/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

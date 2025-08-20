import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoles/getByIds': Operation<'/directoryRoles/getByIds', 'post'>;
}

/**
 * `POST /directoryRoles/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /directoryRoles/getByIds']['body'],
  params?: IEndpoints['POST /directoryRoles/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoles/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoles/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

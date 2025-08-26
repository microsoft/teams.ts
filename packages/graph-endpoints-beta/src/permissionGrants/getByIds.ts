import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /permissionGrants/getByIds': Operation<'/permissionGrants/getByIds', 'post'>;
}

/**
 * `POST /permissionGrants/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /permissionGrants/getByIds']['body'],
  params?: IEndpoints['POST /permissionGrants/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /permissionGrants/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/permissionGrants/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/getByIds': Operation<'/servicePrincipals/getByIds', 'post'>;
}

/**
 * `POST /servicePrincipals/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/getByIds']['body'],
  params?: IEndpoints['POST /servicePrincipals/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /servicePrincipals/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

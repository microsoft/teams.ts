import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /administrativeUnits/getByIds': Operation<'/administrativeUnits/getByIds', 'post'>;
}

/**
 * `POST /administrativeUnits/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /administrativeUnits/getByIds']['body'],
  params?: IEndpoints['POST /administrativeUnits/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /administrativeUnits/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/administrativeUnits/getByIds',
    paramDefs: [],
    params,
    body,
  };
}

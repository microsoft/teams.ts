import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/policySets/getPolicySets': Operation<
    '/deviceAppManagement/policySets/getPolicySets',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/policySets/getPolicySets`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/policySets/getPolicySets']['body'],
  params?: IEndpoints['POST /deviceAppManagement/policySets/getPolicySets']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/policySets/getPolicySets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/policySets/getPolicySets',
    paramDefs: [],
    params,
    body,
  };
}

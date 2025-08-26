import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/assignmentFilters/enable': Operation<
    '/deviceManagement/assignmentFilters/enable',
    'post'
  >;
}

/**
 * `POST /deviceManagement/assignmentFilters/enable`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/assignmentFilters/enable']['body'],
  params?: IEndpoints['POST /deviceManagement/assignmentFilters/enable']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/assignmentFilters/enable']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/assignmentFilters/enable',
    paramDefs: [],
    params,
    body,
  };
}

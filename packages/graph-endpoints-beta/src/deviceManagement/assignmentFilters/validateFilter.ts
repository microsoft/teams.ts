import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/assignmentFilters/validateFilter': Operation<
    '/deviceManagement/assignmentFilters/validateFilter',
    'post'
  >;
}

/**
 * `POST /deviceManagement/assignmentFilters/validateFilter`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/assignmentFilters/validateFilter']['body'],
  params?: IEndpoints['POST /deviceManagement/assignmentFilters/validateFilter']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/assignmentFilters/validateFilter']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/assignmentFilters/validateFilter',
    paramDefs: [],
    params,
    body,
  };
}

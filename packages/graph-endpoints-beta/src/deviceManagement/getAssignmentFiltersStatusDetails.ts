import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/getAssignmentFiltersStatusDetails': Operation<
    '/deviceManagement/getAssignmentFiltersStatusDetails',
    'post'
  >;
}

/**
 * `POST /deviceManagement/getAssignmentFiltersStatusDetails`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/getAssignmentFiltersStatusDetails']['body'],
  params?: IEndpoints['POST /deviceManagement/getAssignmentFiltersStatusDetails']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/getAssignmentFiltersStatusDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/getAssignmentFiltersStatusDetails',
    paramDefs: [],
    params,
    body,
  };
}

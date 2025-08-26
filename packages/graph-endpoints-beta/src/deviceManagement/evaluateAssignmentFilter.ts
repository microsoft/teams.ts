import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/evaluateAssignmentFilter': Operation<
    '/deviceManagement/evaluateAssignmentFilter',
    'post'
  >;
}

/**
 * `POST /deviceManagement/evaluateAssignmentFilter`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/evaluateAssignmentFilter']['body'],
  params?: IEndpoints['POST /deviceManagement/evaluateAssignmentFilter']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/evaluateAssignmentFilter']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/evaluateAssignmentFilter',
    paramDefs: [],
    params,
    body,
  };
}

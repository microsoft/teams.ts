import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory`
 *
 * When set, enables users to weight assignments differently when computing a class average grade.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

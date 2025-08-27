import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme`
 *
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/assignments/{educationAssignment-id}/gradingCategory': Operation<
    '/education/me/assignments/{educationAssignment-id}/gradingCategory',
    'get'
  >;
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/gradingCategory`
 *
 * When set, enables users to weight assignments differently when computing a class average grade.
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingCategory']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/gradingCategory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

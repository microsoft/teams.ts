import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/assignments/{educationAssignment-id}/gradingScheme': Operation<
    '/education/me/assignments/{educationAssignment-id}/gradingScheme',
    'get'
  >;
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/gradingScheme`
 *
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingScheme']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingScheme']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/gradingScheme',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme`
 *
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

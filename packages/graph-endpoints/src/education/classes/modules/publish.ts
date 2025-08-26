import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/publish',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish`
 *
 * Change the state of an educationModule from its original draft status to the published status. Only teachers in the class can perform this operation. When a module is in draft status, students can&#x27;t see the module. When you call this API, the module appears in the student&#x27;s class work list.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/publish',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
    body,
  };
}

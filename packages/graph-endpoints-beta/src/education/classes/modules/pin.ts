import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/pin',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin`
 *
 * Pin an educationModule in the class work list. This action sets the isPinned property to true for an educationModule. Only teachers can perform this action and only one module at a time can be pinned in the class work list.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/pin',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
    body,
  };
}

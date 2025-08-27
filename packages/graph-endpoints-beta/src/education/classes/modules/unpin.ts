import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/unpin',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin`
 *
 * Unpin an educationModule in the classwork list. This action sets the isPinned property to false for an educationModule. Only teachers in the class can perform this operation.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/unpin',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
    body,
  };
}

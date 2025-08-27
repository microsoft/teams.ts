import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate',
    'post'
  >;
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate`
 *
 * Activate an inactive educationAssignment to signal that the assignment has further action items for teachers or students. This action can only be performed by a teacher on currently inactive assignments.
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate']['response']
> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

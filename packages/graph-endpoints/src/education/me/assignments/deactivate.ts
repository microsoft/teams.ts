import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/me/assignments/{educationAssignment-id}/deactivate': Operation<
    '/education/me/assignments/{educationAssignment-id}/deactivate',
    'post'
  >;
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/deactivate`
 *
 * Mark an assigned educationAssignment as inactive to signal that the assignment has no further action items for teachers and students. This action can only be performed by a teacher on assigned assignments.
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/deactivate']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/deactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/deactivate']['response']
> {
  return {
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/deactivate',
    paramDefs: [{ name: 'educationAssignment-id', in: 'path' }],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign',
    'post'
  >;
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign`
 *
 * Reassign the submission to the student with feedback for review. Only teachers can perform this action.  Include the Prefer: include-unknown-enum-members header when you call this method; otherwise, a reassigned submission will be treated as a returned submission. This means that the reassigned status will be mapped to the returned status, and reassignedDateTime and reassignedBy properties will be mapped to returnedDateTime and returnedBy respectively. If the header Prefer: include-unknown-enum-members is provided, a reassigned submission retains the reassigned status. For details, see the examples section.
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}

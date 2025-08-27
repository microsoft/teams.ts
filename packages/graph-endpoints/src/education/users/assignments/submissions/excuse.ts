import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse',
    'post'
  >;
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse`
 *
 * Excuse a submission. Excused submissions aren&#x27;t included in average grade calculations. Grading rubrics and feedback are deleted. Only teachers can perform this action.  If the Prefer: include-unknown-enum-members request header is provided, the excused submission shows the excused status. Otherwise, the submission status retains the returned status. For more information about how to use this header, see the Examples section.
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse']['response']
> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}

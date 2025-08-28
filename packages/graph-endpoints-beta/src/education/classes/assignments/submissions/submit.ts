import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit`
 *
 * Indicate that a student is done with the work and is ready to hand in the assignment. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from working to submitted. During the submit process, all the resources are copied to the submittedResources bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student&#x27;s assignment on their behalf.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}

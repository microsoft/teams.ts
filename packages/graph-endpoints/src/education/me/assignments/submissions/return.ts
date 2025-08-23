import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return',
    'post'
  >;
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return`
 *
 * Make the grade and feedback associated with this submission available to the student.  This action changes the status of the submission from &#x27;submitted&#x27; to &#x27;returned&#x27; and indicates that feedback is provided or grading is done. This action can only be done by the teacher.
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return']['response']
> {
  return {
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return',
    paramDefs: [
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/me/assignments/{educationAssignment-id}/publish': Operation<
    '/education/me/assignments/{educationAssignment-id}/publish',
    'post'
  >;
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/publish`
 *
 * Change the status of an educationAssignment from its original draft status to the published status.  You can change the status from draft to scheduled if the assignment is scheduled for a future date.  Only a teacher in the class can make this call. When an assignment is in draft status, students will not see the assignment, nor will there be any submission objects. When you call this API, educationSubmission objects are created and the assignment appears in the student&#x27;s list. The status of the assignment goes back to draft if there is any backend failure during publish process. To update the properties of a published assignment, see update an assignment. To update the properties of a published assignment, see update an assignment.
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/publish']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/publish',
    paramDefs: [{ name: 'educationAssignment-id', in: 'path' }],
    params,
    body,
  };
}

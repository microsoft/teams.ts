import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    'post'
  >;
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder`
 *
 * Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
